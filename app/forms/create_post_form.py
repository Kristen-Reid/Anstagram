from flask_wtf import FlaskForm
from wtforms import IntegerField ,StringField, TextAreaField
from wtforms.validators import DataRequired


class CreatePost(FlaskForm):
    summary = TextAreaField('summary', validators=[DataRequired()])
    user_id = IntegerField('user_id')
