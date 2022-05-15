from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired


class EditComment(FlaskForm):
    description = TextAreaField('description', validators=[DataRequired()])
