from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
from flask_login import LoginManager
from config import  SECRET_KEY , SQLALCHEMY_DATABASE_URI
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SECRET_KEY'] = SECRET_KEY

# Initialize extensions
db = SQLAlchemy(app)
mail = Mail(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

from routes import *

if __name__ == '__main__':
import os

if __name__ == "__main__":
    # Ensure the app context is active so db.create_all() works properly
    with app.app_context():
        db.create_all()

    # Determine port and host from environment (for platforms like Railway/Render)
    port = int(os.environ.get("PORT", 5000))
    host = "0.0.0.0"  # Listen on all interfaces for external access

    # Use debug mode only if running locally (controlled by ENV variable)
    debug_mode = os.environ.get("FLASK_DEBUG", "False").lower() == "true"

    app.run(host=host, port=port, debug=debug_mode)
