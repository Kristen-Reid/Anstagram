from flask import Blueprint
from flask_login import current_user, login_required
from app.models import db, Like, Post


likes_routes = Blueprint('likes', __name__)

@likes_routes.route('/')
@login_required
def get_all_likes():
    likes = Like.query.filter(
        Like.user_id == current_user.to_dict()['id']).all()
    return {'likes': [like.like_to_dict() for like in likes]}


@likes_routes.route('/add/<int:id>', methods=['GET', 'POST'])
@login_required
def like_post(id):

    user_id = current_user.to_dict()['id']
    post_id = Post.query.filter(Post.id == id).first()
    # like = Like.query.filter(user_id, post_id).first()

    # if like is None:
    new_like = Like(user_id, post_id)
    db.session.add(new_like)
    db.session.commit()
    # else:
    #     db.session.delete(like)
    #     db.session.commit()

    return new_like.like_to_dict()


@likes_routes.route('/del/<int:id>', methods=['DELETE'])
@login_required
def del_likes(id):
    likes = Like.query.get(id)
    db.session.delete(likes)
    db.session.commit()
    return {'message': 'Success'}
