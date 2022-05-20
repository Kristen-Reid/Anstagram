from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User
import re


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

class SignUpForm(FlaskForm):
    full_name = StringField('full_name', validators=[DataRequired(), user_exists, Length(min=5, max=50)])
    username = StringField('username', validators=[DataRequired(), Length(min=5, max=50), username_exists, user_exists])
    email = StringField('email', validators=[DataRequired(), Email(), Length(min=6, max=255), user_exists])
    password = StringField('password', validators=[DataRequired(), Length(min=5, max=50)])
