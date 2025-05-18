import os
import re
import google.generativeai as genai

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Set up the model
model = genai.GenerativeModel('gemini-1.5-flash-latest')

def generate_python_response(query):
    """Generate a response for Python programming questions using Gemini API"""
    # Check if the query is asking for code
    code_request = re.search(r'(code|example|script|program|function|class|implement|write) (for|of|to|that|a|an|the)', query.lower())
    
    # Create a system prompt to guide Gemini's responses
    system_prompt = """
    You are a Python programming expert assistant. Provide clear, concise, and accurate answers to Python programming questions.
    Focus on best practices and modern Python techniques.
    
    If the user is asking for code, include a well-commented, working code example that demonstrates the concept.
    Format your response with a clear explanation followed by code examples when appropriate.
    """
    
    # Add specific instructions if code is requested
    if code_request:
        system_prompt += """
        Since the user is asking for code, make sure to include:
        1. A complete, working code example
        2. Clear comments explaining key parts
        3. Example output if applicable
        """
    
    try:
        # Generate response from Gemini
        response = model.generate_content([
            system_prompt,
            f"User question about Python: {query}"
        ])
        
        # Process the response
        answer_text = response.text
        
        # Extract code blocks if present (text between triple backticks)
        code_pattern = r"\`\`\`python(.*?)\`\`\`"
        code_matches = re.findall(code_pattern, answer_text, re.DOTALL)
        
        if code_matches:
            # Get the first code block
            code_example = code_matches[0].strip()
            # Remove the code blocks from the explanation
            explanation = re.sub(code_pattern, "", answer_text, flags=re.DOTALL).strip()
        else:
            explanation = answer_text
            code_example = None
        
        return {
            "answer": explanation,
            "code": code_example
        }
    except Exception as e:
        print(f"Error generating response: {e}")
        return {
            "answer": "I encountered an error while processing your question. Please try again or rephrase your question.",
            "code": None
        }
