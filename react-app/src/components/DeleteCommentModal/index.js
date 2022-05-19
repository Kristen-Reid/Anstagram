import React, { useState } from 'react';
import DeleteCommentForm from './DeleteCommentForm';
import { Modal } from '../../context/Modal';


const DeleteCommentModal = ({post, closeCommentModal }) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='navLink comment-menu-btn delete-btn' onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteCommentForm post={post} onClose={() => setShowModal(false)} closeCommentModal={closeCommentModal} />
                </Modal>
            )}

        </>
    )
}

export default DeleteCommentModal;
