import os
import requests
from typing import Dict
import logging
from tenacity import retry, stop_after_attempt, wait_exponential

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Together.ai configuration
TOGETHER_API_KEY = os.getenv('TOGETHER_API_KEY')  # Get from https://together.ai

if not TOGETHER_API_KEY:
    raise ValueError("TOGETHER_API_KEY is not set in environment variables.")

TOGETHER_API_URL = "https://api.together.xyz/v1/chat/completions"
TOGETHER_MODEL = "mistralai/Mistral-7B-Instruct-v0.1"  # Free model

@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=4, max=10))
def get_ai_response(query: str, is_code: bool = False) -> str:
    """Get response from Together.ai's API"""
    try:
        headers = {
            "Authorization": f"Bearer {TOGETHER_API_KEY}",
            "Content-Type": "application/json"
        }
        
        # System prompt based on request type
        system_prompt = (
            "Generate ONLY raw Python code with no explanations." 
            if is_code 
            else "You are a helpful Python coding assistant."
        )
        
        payload = {
            "model": TOGETHER_MODEL,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": query}
            ],
            "temperature": 0.5 if is_code else 0.7  # Lower temp for code generation
        }
        
        response = requests.post(
            TOGETHER_API_URL, 
            json=payload, 
            headers=headers,
            timeout=30
        )
        response.raise_for_status()
        return response.json()['choices'][0]['message']['content']
    
    except requests.exceptions.RequestException as e:
        logger.error(f"API request failed: {str(e)}")
        return f"Error: Service unavailable ({str(e)})"
    except KeyError:
        logger.error("Invalid API response format")
        return "Error: Invalid response from AI service"

def python_assistance(query: str) -> Dict:
    """Handle general Python assistance requests"""
    response = get_ai_response(query, is_code=False)
    return {'response': response}

def generate_python_code(description: str) -> Dict:
    """Handle code generation requests"""
    response = get_ai_response(
        f"Generate Python code for: {description}",
        is_code=True
    )
    return {'code': response}