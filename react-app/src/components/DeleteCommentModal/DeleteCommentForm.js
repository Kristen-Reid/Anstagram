import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../store/comment';
import './deleteCommentForm.css';


const DeleteCommentForm = ({post, onClose, comment, closeCommentModal}) => {
    const dispatch = useDispatch();

    return (
        <div className='delete-comment-container'>
            <div className='delete-comment-box'>
                <div className='delete-comment-message'>
                    <h2 className='delete-red'>Delete Post?</h2>
                    <p className='delete-question'>Are you sure you want to delete this comment?</p>
                </div>


                    <div key={comment?.id} className='delete-comment-btn'>
                        <button className='delete-btn comment-menu-btn' onClick={() => { dispatch(deleteComment(comment?.id)); closeCommentModal() }}>Delete</button>
                    </div>

                <div className='cancel-btn'>
                    <button className='cancel-btn comment-menu-btn' onClick={() => closeCommentModal()}>Cancel</button>
                </div>
            </div>
        </div>
    )
}


export default DeleteCommentForm;
