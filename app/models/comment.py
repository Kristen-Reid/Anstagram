from .db import db
from sqlalchemy import ForeignKey
from datetime import datetime


class Comment(db.Model):
    __tablename__= 'comments'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, ForeignKey('posts.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now, nullable=False)

    user = db.relationship('User', back_populates='comment')
    post = db.relationship('Post', back_populates='comment')


    def comment_to_dict(self):
        return {
            'id': self.id,
            'description': self.description,
            'user_id': self.user_id,
            'post_id': self.post_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'user': self.user.to_dict(),
            'post': [Post.post_to_dict() for Post in self.post]
        }
