from flask_wtf import FlaskForm
from wtforms import IntegerField ,StringField, TextAreaField
from wtforms.validators import DataRequired


class Post(FlaskForm):
    media_url = StringField('media_url', validators=[DataRequired()])
    summary = TextAreaField('summary', validators=[DataRequired()])
    user_id = IntegerField('user_id')
