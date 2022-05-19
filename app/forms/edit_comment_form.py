from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired, ValidationError


def description_exists(form, field):
    description = field.data
    if len(description) <= 0 or len(description) > 2200:
        raise ValidationError('Please provide a summary.')

class EditComment(FlaskForm):
    description = TextAreaField('description', validators=[DataRequired(), description_exists])
