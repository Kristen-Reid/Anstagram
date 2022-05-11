from .db import db
from sqlalchemy import ForeignKey
from datetime import datetime


class Comment(db.Model):
    __tablename__= 'comments'

    id = db.Column(db.Interger, primary_key=True)
    description = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, ForeignKey('posts.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now, nullable=False)
    updated_at = db.Column(db.DateTime, onupdate=datetime.now, nullable=False)

    user = db.relationship('User', back_populates='comments')
    post = db.relationship('Post', back_populates='comments')
