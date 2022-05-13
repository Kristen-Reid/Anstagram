from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from datetime import datetime
from app.models import db, Post
from app.forms.create_post_form import CreatePost
from app.forms.edit_post_form import EditPost
from app.boto import *
import boto3
import botocore

posts_routes = Blueprint('posts', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@posts_routes.route('/')
@login_required
def get_all_posts():
    posts = Post.query.all()
    response = {'posts': [post.post_to_dict() for post in posts]}
    return response


@posts_routes.route('/<int:id>')
@login_required
def get_one_post(id):
    post = Post.query.filter(Post.id == id).one()
    return post.post_to_dict()


@posts_routes.route('/add', methods=['POST'])
@login_required
def add_a_post():
    user_id = current_user.to_dict()['id'].one()


    form = CreatePost()
    form['csrf_token'].data = request.cookies['csrf_token']
    media_url = upload_file_to_s3(form.data['media_url'], Config.S3_BUCKET)
    summary = form.data['summary']


    if form.validate_on_submit():
        post = Post(
            media_url=media_url,
            summary=summary,
            user_id=user_id,
            created_at=datetime.now,
            updated_at=datetime.now)

        db.session.add(post)
        db.session.commit()

        return post.post_to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}


@posts_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def update_post(id):
    # user_id = current_user.to_dict()['id'].one()

    form = EditPost()
    form['csrf_token'].data = request.cookies['csrf_token']


    if form.validate_on_submit():
        post = Post.query.get(id)
        form.populate_obj(post)

        db.session.commit()

        return post.post_to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}


@posts_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_post(id):
    post = Post.query.get(id)

    db.session.delete(post)
    db.session.commit()
    return {'message': 'Success'}
