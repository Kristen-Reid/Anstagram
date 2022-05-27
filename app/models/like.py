import sqlalchemy
from .db import db
from sqlalchemy import ForeignKey


class Like(db.Model):
    __tablename__= 'likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, ForeignKey('posts.id'), nullable=False)

    user = db.relationship('User', back_populates='like')
    post = db.relationship('Post', back_populates='like')


    def like_to_dict(self):
        return {
         'id': self.id,
         'user_id': self.user_id,
         'post_id': self.post_id
        }
