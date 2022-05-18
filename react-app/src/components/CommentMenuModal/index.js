import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentMenu from './CommentMenu';
import { getAllPosts } from '../../store/post';
import { getAllComments } from '../../store/comment';
import { Modal } from '../../context/Modal';
import { ReactComponent as CommentMenuBtn } from '../../svgImg/three-dots.svg';


const CommentMenuModal = ({post}) => {

    const [showCommentModal, setShowCommentModal] = useState(false);

    return (
        <>
            <button className='navLink comment-menu-btn' onClick={() => setShowCommentModal(true)}><CommentMenuBtn /></button>
            {showCommentModal && (
                <Modal onClose={() => setShowCommentModal(false)}>
                    <CommentMenu post={post} closeCommentModal={() => setShowCommentModal(false)}/>
                </Modal>
            )}

        </>
    )
}

export default CommentMenuModal;
