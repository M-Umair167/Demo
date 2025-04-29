from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
from config import DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT, SECRET_KEY

from config import MAIL_SERVER, MAIL_PORT, MAIL_USE_TLS, MAIL_USERNAME, MAIL_PASSWORD



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
app.config['SECRET_KEY'] = SECRET_KEY

app.config['MAIL_SERVER'] = MAIL_SERVER
app.config['MAIL_PORT'] = MAIL_PORT
app.config['MAIL_USE_TLS'] = MAIL_USE_TLS
app.config['MAIL_USERNAME'] = MAIL_USERNAME
app.config['MAIL_PASSWORD'] = MAIL_PASSWORD

# Initialize extensions
db = SQLAlchemy(app)
mail = Mail(app)

from routes import *

if __name__ == '__main__':
    app.run(debug=True)