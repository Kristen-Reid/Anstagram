import React, { useState } from 'react';
import DeleteCommentForm from './DeleteCommentForm';
import { Modal2 } from '../../context/Modal2';


const DeleteCommentModal = ({post, comment, closeCommentModal }) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='navLink comment-menu-btn delete-btn' onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal2 onClose={() => setShowModal(false)}>
                    <DeleteCommentForm post={post} comment={comment} onClose={() => setShowModal(false)} closeCommentModal={closeCommentModal} />
                </Modal2>
            )}

        </>
    )
}

export default DeleteCommentModal;
