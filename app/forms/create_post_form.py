from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired, ValidationError
from app.models import Post


def summary_exists(form, field):
    summary = field.data
    if len(summary) <= 0 or len(summary) > 2200:
        raise ValidationError('Please provide a summary.')

class CreatePost(FlaskForm):
    summary = TextAreaField('summary', validators=[DataRequired(), summary_exists])
    
