from flask import render_template, request, redirect, session,jsonify
from app import app, db, mail ,login_manager
from models import User, Contact , ReadTopic
from services import generate_python_response
import logging
from flask_mail import Message
import contextlib
import traceback
import io
import re
from flask_login import login_user, login_required, current_user, logout_user


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

def create_tables():
    db.create_all()


# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# A simpler approach to handling input in code execution
class CodeExecutor:
    def __init__(self):
        self.inputs = []
        self.input_index = 0
        self.input_requested = False
        self.output_buffer = io.StringIO()
        self.execution_interrupted = False
    
    def reset(self, inputs=None):
        self.inputs = inputs or []
        self.input_index = 0
        self.input_requested = False
        self.execution_interrupted = False
        self.output_buffer = io.StringIO()
    
    def custom_input(self, prompt=''):
        # Print the prompt to the output
        print(prompt, end='')
        
        # Check if we have inputs available
        if self.input_index < len(self.inputs):
            user_input = self.inputs[self.input_index]
            self.input_index += 1
            print(user_input)  # Echo the input
            return user_input
        
        # No more inputs available, mark as waiting and raise exception to halt execution
        self.input_requested = True
        self.execution_interrupted = True
        
        # Raise a custom exception to interrupt the execution
        raise InterruptedError("Waiting for user input")
    
    def execute(self, code, inputs=None):
        self.reset(inputs)
        
        # Create a clean environment with minimal globals
        # Using a copy of __builtins__ is safer
        import builtins
        safe_builtins = dict(builtins.__dict__)
        
        # Remove potentially unsafe functions but keep import capability
        for func in ['input', 'open']:
            if func in safe_builtins:
                del safe_builtins[func]
        
        # Set up the globals dictionary
        globals_dict = {'__builtins__': safe_builtins}
        
        # Add the safe input function
        globals_dict['__builtins__']['input'] = self.custom_input
        
        # Pre-import commonly used modules to make them available
        import math, random, datetime, json, re, collections, itertools, functools
        globals_dict.update({
            'math': math,
            'random': random,
            'datetime': datetime,
            'json': json,
            're': re,
            'collections': collections,
            'itertools': itertools,
            'functools': functools
        })
        
        with contextlib.redirect_stdout(self.output_buffer), contextlib.redirect_stderr(self.output_buffer):
            try:
                # Execute with a timeout in case of infinite loops
                exec(code, globals_dict)
                
                # Return results
                return {
                    'status': 'success',
                    'output': self.output_buffer.getvalue(),
                    'waiting_for_input': False
                }
            except InterruptedError:
                # This is expected when waiting for input
                return {
                    'status': 'waiting',
                    'output': self.output_buffer.getvalue(),
                    'waiting_for_input': True
                }
            except Exception as e:
                # Get the full traceback for other errors
                error_traceback = traceback.format_exc()
                return {
                    'status': 'error',
                    'output': self.output_buffer.getvalue(),
                    'error': str(e),
                    'traceback': error_traceback,
                    'waiting_for_input': False
                }

# Global code executor
code_executor = CodeExecutor()



# preview page 
@app.route('/')
def root():
    return redirect('/index')


# signup page 
@app.route('/signup.html')
def signup_html():
    return redirect('/signup')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        # handle request
        name = request.form['name'].strip()
        email = request.form['email'].strip()
        password = request.form['password']

        # Validation
        if not name or not email or not password:
            return render_template('signup.html', error='All fields are required.')
        if len(password) < 6:
            return render_template('signup.html', error='Password must be at least 6 characters.')
        if User.query.filter_by(email=email).first():
            return render_template('signup.html', error='Email is already registered.')

        new_user = User(name=name, email=email)
        new_user.set_password(password)
        db.session.add(new_user)
        try:
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            logger.error(f"Signup DB commit error: {str(e)}", exc_info=True)
            return render_template('signup.html', error="Internal Server Error. Please try again.")

        return redirect('/login')
    return render_template('signup.html')


# login page
@app.route('/login.html')
def login_html():
    return redirect('/login')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email'].strip()
        password = request.form['password']

        # Validation
        if not email or not password:
            return render_template('login.html', error='All fields are required.')

        user = User.query.filter_by(email=email).first()
         
        if not user:
            return render_template('login.html', error='Invalid user')
        elif not user.check_password(password):
            return render_template('login.html', error='Incorrect password')
        else:
            login_user(user)
            return redirect('/index')
        
    return render_template('login.html')


# forget password

@app.route('/forgot-password', methods=['GET', 'POST'])
def forgot_password():
    if request.method == 'POST':
        email = request.form['email']
        user = User.query.filter_by(email=email).first()
        if user:
            return render_template('login.html', email=email)
        return render_template('forgot_password.html', error="Email not registered.")
    return render_template('forgot_password.html')


# index page or home page
@app.route('/index.html')
def index_html():
    return redirect('/index')

@app.route('/index')
def index():
    user = User.query.filter_by(email=session.get('email')).first() if 'email' in session else None
    return render_template('index.html', user=user)


# about page 
@app.route('/about.html')
def about_html():
    return render_template('about.html')


# contact page
@app.route('/contact.html')
def contact_html():
    return render_template('contact.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name'].strip()
        email = request.form['email'].strip()
        phone = request.form.get('phone', '').strip()
        message_text = request.form['message'].strip()

        # Validation
        name_pattern = r'^[A-Za-z.]+$'
        email_pattern = r'^[^@]+@[^@]+\.[a-zA-Z]{2,6}$'

        if not re.match(name_pattern, name):
            return render_template('contact.html', error="Name must contain only letters and dot.")
        if not re.match(email_pattern, email):
            return render_template('contact.html', error="Invalid email format.")
        if not message_text:
            return render_template('contact.html', error="Message cannot be empty.")

        new_contact = Contact(name=name, email=email, phone=phone, message=message_text)
        db.session.add(new_contact)
        db.session.commit()


        # Send email to admin
        try:
            msg = Message("New Contact Submission", recipients=["umairbwp202@gmail.com"])
            msg.body = f"Name: {name}\nEmail: {email}\nPhone: {phone}\n\nMessage:\n{message_text}"
            mail.send(msg)
        except Exception as e:
            print("Failed to send email:", e)

        return render_template('contact.html', success="Message sent successfully!")
    return render_template('contact.html')


# tutorials page 
@app.route('/tutorials.html')
def tutorials_html():
    return render_template('tutorials.html',user=current_user)


@app.route('/mark-read', methods=['POST'])
@login_required
def mark_read():
    data = request.get_json()
    topic = data.get('topic')
    if topic:
        existing = ReadTopic.query.filter_by(
            user_id=current_user.id, topic_name=topic).first()
        if not existing:
            db.session.add(
                ReadTopic(user_id=current_user.id, topic_name=topic))
            db.session.commit()
    return '', 204

@app.route('/unmark-read', methods=['POST'])
@login_required
def unmark_read():
    data = request.get_json()
    topic = data.get('topic')
    if topic:
        existing = ReadTopic.query.filter_by(
            user_id=current_user.id, topic_name=topic).first()
        if existing:
            db.session.delete(existing)
            db.session.commit()
    return '', 204

@app.route('/get-read-topics')
@login_required
def get_read_topics():
    topics = ReadTopic.query.filter_by(user_id=current_user.id).all()
    topic_list = [t.topic_name for t in topics]
    return jsonify(topic_list)



# chatbot page
@app.route('/chatbot.html')
def chatbot_html():
    return render_template('chatbot.html')


# compiler page
@app.route('/compiler.html')
def compiler_html():
    return render_template('compiler.html')

@app.route('/api/execute', methods=['POST'])
def execute_code():
    data = request.json
    code = data.get('code', '')
    input_data = data.get('input', '')
    
    # Parse inputs if provided
    inputs = input_data.split('\n') if input_data else []
    
    # Execute the code with the provided inputs
    result = code_executor.execute(code, inputs)
    
    return jsonify(result)

@app.route('/api/continue_execution', methods=['POST'])
def continue_execution():
    data = request.json
    code = data.get('code', '')
    input_data = data.get('input', '')
    previous_input = data.get('previous_input', '')
    
    # Combine previous input with new input
    combined_input = previous_input + '\n' + input_data if previous_input else input_data
    
    # Parse all inputs
    inputs = combined_input.split('\n') if combined_input else []
    
    # Execute with the combined inputs
    result = code_executor.execute(code, inputs)
    
    # Add the combined input to the result for future executions
    result['previous_input'] = combined_input
    
    return jsonify(result)



# to log out
@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect('/index')


# ai api request
@app.route('/api/ask', methods=['POST'])
def ask():
    try:
        data = request.get_json()
        if not data or 'query' not in data:
            return jsonify({"error": "Invalid request format"}), 400
            
        query = data['query'].strip()
        if not query:
            return jsonify({"error": "Empty query"}), 400
        
        # Get response from your AI function
        response = generate_python_response(query)
        
        # Ensure consistent response format
        if isinstance(response, str):
            return jsonify({"answer": response})
        elif isinstance(response, dict):
            # Convert any 'response' key to 'answer' for consistency
            if 'response' in response:
                response['answer'] = response.pop('response')
            return jsonify(response)
        else:
            return jsonify({"answer": str(response)})
            
    except Exception as e:
        print(f"Error in /api/ask: {str(e)}")
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500