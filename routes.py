from flask import render_template, request, redirect, session,jsonify
from app import app, db, mail
from models import User, Contact
from services import generate_python_code, python_assistance
import logging
from flask_mail import Message
import contextlib
import traceback
import io
import re


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
def preview():
    return render_template('preview.html')


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

        session['email'] = user.email
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
    return render_template('tutorials.html')


# chatbot page
@app.route('/chatbot.html')
def chatbot_html():
    return render_template('chatbot.html')

@app.route('/api/generate', methods=['POST'])
def handle_generate():
    try:
        data = request.json
        description = data.get('description', '')
        if not description:
            return jsonify({'error': 'Description is required'}), 400
        
        result = generate_python_code(description)
        return jsonify(result)
    except Exception as e:
        logger.error(f"Error in generate: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/assist', methods=['POST'])
def handle_assist():
    try:
        data = request.json
        query = data.get('query', '')
        if not query:
            return jsonify({'error': 'Query is required'}), 400
        
        result = python_assistance(query)
        return jsonify(result)
    except Exception as e:
        logger.error(f"Error in assist: {str(e)}")
        return jsonify({'error': str(e)}), 500



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
def logout():
    session.pop('email', None)
    return redirect('/index')
