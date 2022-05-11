from urllib import response
from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import db, Post

posts_routes = Blueprint('posts', __name__)


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


@posts_routes.route('/add')
@login_required
def add_a_post():
    
