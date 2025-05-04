from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
from config import DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT, SECRET_KEY
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
app.config['SECRET_KEY'] = SECRET_KEY

# Initialize extensions
db = SQLAlchemy(app)
mail = Mail(app)

from routes import *

if __name__ == '__main__':
    app.run(debug=True)