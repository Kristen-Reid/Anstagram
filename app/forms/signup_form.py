from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
import re


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

def valid_email(form, field):
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')
    regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')
    if not re.fullmatch(regex, email):
        raise ValidationError('Email is not valid')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')
    elif len(username) < 5:
        raise ValidationError('Username must have at least 4 characters.')
    elif len(username) > 30:
        raise ValidationError('Username cannot be more than 30 characters.')

        
def full_name_length(form, field):
    full_name = field.data
    if len(full_name) < 5 or len(full_name) > 50:
        raise ValidationError('Full Name must be between 5 and 50 characters.')


class SignUpForm(FlaskForm):
    full_name = StringField('full_name', validators=[DataRequired(), user_exists, full_name_length])
    username = StringField('username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), valid_email, user_exists])
    password = StringField('password', validators=[DataRequired()])
