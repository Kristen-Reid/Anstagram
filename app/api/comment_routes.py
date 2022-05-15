from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Comment, Post
from app.forms.create_comment_form import CreateComment
from app.forms.edit_comment_form import EditComment


comments_routes = Blueprint('comments', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



@comments_routes.route('/')
@login_required
def get_all_comments():
    comments = Comment.query.all()
    response = {'comments': [comment.comment_to_dict() for comment in comments]}
    return response


@comments_routes.route('/<int:id>')
@login_required
def get_one_comment(id):
    comment = Comment.query.filter(Comment.id == id).one()

    return comment.comment_to_dict()


@comments_routes.route('/<int:id>/add', methods=['POST'])
@login_required
def add_a_comment(id):
    user_id = current_user.to_dict()['id']
    print(post_id, '&&&&&&&&')

    description = form.data['description']

    form = CreateComment()

    if form.validate_on_submit():
        comment = Comment(

        )
