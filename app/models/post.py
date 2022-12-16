from .db import db
from sqlalchemy import ForeignKey
from datetime import datetime
from .db import db, environment, SCHEMA, add_prefix_for_prod


class Post(db.Model):
    __tablename__= 'posts'
    if environment == "production":
        __table_args__ = {'schema' : SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    media_url = db.Column(db.String(255), nullable=False)
    summary = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now, nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    user = db.relationship('User', back_populates='post')
    comment = db.relationship('Comment', back_populates='post', cascade='all, delete-orphan')
    like = db.relationship('Like', back_populates='post', cascade='all, delete-orphan')


    def post_to_dict(self):
        return {
            'id': self.id,
            'media_url': self.media_url,
            'summary': self.summary,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'user_id': self.user_id,
            'user': self.user.to_dict()
        }
