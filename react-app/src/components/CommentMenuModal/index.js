import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentMenu from './CommentMenu';
import { getAllPosts } from '../../store/post';
import { getAllComments } from '../../store/comment';
import { Modal } from '../../context/Modal';
import { ReactComponent as CommentMenuBtn } from '../../svgImg/three-dots.svg';


const CommentMenuModal = ({post}) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='navLink comment-menu-btn' onClick={() => setShowModal(true)}><CommentMenuBtn /></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CommentMenu post={post} close={() => setShowModal(false)}/>
                </Modal>
            )}

        </>
    )
}

export default CommentMenuModal;
