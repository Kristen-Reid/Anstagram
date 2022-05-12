from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired


class EditPost(FlaskForm):
    summary = TextAreaField('summary', validators=[DataRequired()])
