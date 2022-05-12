from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired


class EditForm(FlaskForm):
    summary = TextAreaField('summary', validators=[DataRequired()])
