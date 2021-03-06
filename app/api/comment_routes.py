from flask import Blueprint, jsonify, request
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



@comments_routes.route('/<int:id>')
@login_required
def get_all_comments(id):
    comments = Comment.query.filter(Comment.post_id == id).all()
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


    form = CreateComment()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        comment = Comment(
            description=data['description'],
            user_id=user_id,
            post_id=id
        )

        db.session.add(comment)
        db.session.commit()

        return comment.comment_to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@comments_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def update_comment(id):

    form = EditComment()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        comment = Comment.query.get(id)
        comment.description = data['description']

        db.session.commit()

        return comment.comment_to_dict()
    else:
       return {'errors': validation_errors_to_error_messages(form.errors)}, 401



@comments_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)

    db.session.delete(comment)
    db.session.commit()
    return {'message': 'Success'}
