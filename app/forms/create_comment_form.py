from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired, ValidationError, Length


def description_exists(form, field):
    description = field.data
    if len(description) <= 0 or len(description) > 2200:
        raise ValidationError('Please provide a summary.')

class CreateComment(FlaskForm):
    description = TextAreaField('description', validators=[DataRequired(), Length(min=5, max=255), description_exists])
