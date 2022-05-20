import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts, getAPost, deletePost } from '../../store/post';
import './deletePost.css';


const DeletePost = ({post, onClose, closeCommentModal}) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const comments = useSelector(state => state.comments);
    const commentArr = Object.values(comments);
    const comment = commentArr.find(comment => comment?.post_id === post?.id && user?.id === comment?.user_id);



    return (
        <div className='delete-comment-container'>
            <div className='delete-comment-box'>
                <div className='delete-comment-message'>
                    <h2 className='delete-red'>Delete Post?</h2>
                    <p className='delete-question'>Are you sure you want to delete this post?</p>
                </div>
                    <div  className='delete-comment-btn'>
                        <button className='delete-btn comment-menu-btn' onClick={() => { dispatch(deletePost(post?.id)); closeCommentModal() }}>Delete</button>
                    </div>
                <div className='cancel-btn'></div>
                <button className='cancel-btn comment-menu-btn' onClick={() => closeCommentModal()}>Cancel</button>
            </div>
        </div>
    )
}


export default DeletePost;
