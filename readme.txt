==============================
Flask Web Application Project
==============================

Project Overview:
-----------------
This project is a full-stack web application built using Flask, SQLAlchemy, and PostgreSQL. 
It features user authentication (signup, login, logout), contact form handling with email 
notification, and multiple template-driven pages such as tutorials, chatbot, and a compiler.

Project Structure:
------------------
- app.py         : Main Flask application with app and extensions initialization
- config.py      : Configuration file containing database and secret key settings
- models.py      : SQLAlchemy models for User and Contact data
- routes.py      : All routes and logic for handling user requests and form submissions
- templates/     : HTML files for various pages (signup, login, contact, etc.)

Core Features:
--------------
✓ User registration with password hashing  
✓ User login and session handling  
✓ Contact form with server-side validation and email notifications  
✓ Static content pages: About, Tutorials, Chatbot, Compiler  
✓ Password reset request (mockup page)  
✓ PostgreSQL database integration  
✓ Email integration using Flask-Mail  

Requirements:
-------------
- Python 3.x
- Flask
- Flask-Mail
- Flask-SQLAlchemy
- psycopg2-binary
- bcrypt
- gunicorn

Installation and Setup:
------------------------
1. Install required libraries:
   pip install Flask Flask-Mail Flask-SQLAlchemy psycopg2-binary bcrypt

2. Set up PostgreSQL database:
   - Ensure PostgreSQL is running locally
   - Create a database named `demo` **or** use an existing one and update the `DB_NAME` in `config.py` accordingly
   - Set correct credentials in `config.py`:
     DB_NAME = "demo"
     DB_USER = "postgres"
     DB_PASS = "admin"               # Replace 'admin' with your own postgresql password
     DB_HOST = "localhost"
     DB_PORT = "5432"

3. Run the application:
   python app.py

   The app will be available at http://127.0.0.1:5000

Notes:
------
- This app sends contact form messages to "umairbwp202@gmail.com" (can be changed in `routes.py`)
- Passwords are securely stored using bcrypt hashing
- For production, ensure environment variables are used instead of hardcoded secrets

Author:
-------
Muhammad Umair

