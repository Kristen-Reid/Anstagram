import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostMenu from './PostMenu';
import { getAllPosts } from '../../store/post';
import { getAllComments } from '../../store/comment';
import { Modal } from '../../context/Modal';
import { ReactComponent as PostMenuBtn } from '../../svgImg/three-dots.svg';


const PostMenuModal = ({ id, post }) => {

    const [showCommentModal, setShowCommentModal] = useState(false);

    return (
        <>
            <button className='navLink menu-btn' onClick={() => setShowCommentModal(true)}><PostMenuBtn /></button>
            {showCommentModal && (
                <Modal onClose={() => setShowCommentModal(false)}>
                    <PostMenu id={id} post={post} closeCommentModal={() => setShowCommentModal(false)}/>
                </Modal>
            )}

        </>
    )
}

export default PostMenuModal;
