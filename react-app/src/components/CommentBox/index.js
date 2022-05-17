import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../../store/comment';
import '../CommentBox/comment-box.css'


const CommentBox = ({ id, description, userId, username, postId, createdAt, updatedAt, comment }) => {
    return (
        <div className='comment-box-container'>
            <div className='comment-box'>
                    {username}
                    {description}
            </div>
        </div>
    )
}

export default CommentBox;
