import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllComments, getAComment, deleteComment } from '../../store/comment';
import './deleteCommentForm.css';


const DeleteCommentForm = ({post, onClose}) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const comments = useSelector(state => state.comments);
    const commentArr = Object.values(comments);
    const comment = commentArr.find(comment => comment?.post_id === post?.id);



    return (
        <div className='delete-comment-container'>
            <div className='delete-comment-box'>
                <div className='delete-comment-message'>
                    <h2>Delete Post?</h2>
                    <p>Are you sure you want to delete this post?</p>
                </div>
                <div className='delete-comment-btn'>
                    <button onClick={() => { dispatch(deleteComment(comment?.id)); onClose() }}>Delete</button>
                </div>
                <div className='cancel-btn'></div>
                <button onClick={() => onClose()}>Cancel</button>
            </div>
        </div>
    )
}


export default DeleteCommentForm;
