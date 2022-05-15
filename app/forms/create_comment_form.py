from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired


class CreateComment(FlaskForm):
    description = TextAreaField('description', validators=[DataRequired()])
