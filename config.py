import os

DB_NAME = os.getenv("DB_NAME", "demo")
DB_USER = os.getenv("DB_USER", "postgres")
DB_PASS = os.getenv("DB_PASS", "admin")
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = os.getenv("DB_PORT", "5432")
SECRET_KEY = os.getenv("SECRET_KEY", "SECRET_KEY")

# Email config
MAIL_SERVER = 'smtp.gmail.com'
MAIL_PORT = 587
MAIL_USE_TLS = True
MAIL_USERNAME = os.getenv("umairbwp@gmail.com")
MAIL_PASSWORD = os.getenv("admin")
