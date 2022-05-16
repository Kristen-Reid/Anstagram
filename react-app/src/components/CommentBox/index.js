import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../../store/comment';
import '../CommentBox/comment-box.css'


const CommentBox = ({ id, description, userId, username, postId, createdAt, updatedAt }) => {
    return (
        <div className='comment-box-container'>
            {description}
        </div>
    )
}

export default CommentBox;
