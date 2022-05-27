from flask import Blueprint
from flask_login import current_user, login_required
from app.models import db, Like


likes_routes = Blueprint('likes', __name__)

@likes_routes.route('/<int:id>', methods=['POST'])
@login_required
def like_post(id):

    user_id = current_user.to_dict()['id']
    post_id = id
    like = Like.filter(user_id, post_id)

    if like is None:
        new_like = Like(user_id, post_id)
        db.session.add(new_like)
        db.session.commit()
    else:
        db.session.delete(like)
        db.session.commit()

    return like.like_to_dict()
