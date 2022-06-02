from flask import Blueprint, jsonify
from flask_login import current_user, login_required
from app.models import db, Like, Post


likes_routes = Blueprint('likes', __name__)

@likes_routes.route('/')
@login_required
def get_all_likes():
    likes = Like.query.filter(
        Like.user_id == current_user.to_dict()['id']).all()

    return {'likes': [like.like_to_dict() for like in likes]}


@likes_routes.route('/add/<int:id>', methods=['POST'])
@login_required
def like_post(id):

    user_id = current_user.to_dict()['id']


    new_like = Like(user_id=user_id, post_id=id)
    db.session.add(new_like)
    db.session.commit()

    return new_like.like_to_dict()


@likes_routes.route('/del/<int:id>', methods=['DELETE'])
@login_required
def del_likes(id):
    likes = Like.query.filter(Like.post_id == id, Like.user_id == current_user.to_dict()['id']).first()
    db.session.delete(likes)
    db.session.commit()
    return jsonify(likes.id)
