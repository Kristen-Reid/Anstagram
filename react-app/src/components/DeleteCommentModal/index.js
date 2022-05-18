import React, { useState } from 'react';
import DeleteCommentForm from './DeleteCommentForm';
import { Modal } from '../../context/Modal';


const DeleteCommentModal = ({post}) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='navLink comment-menu-btn' onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteCommentForm post={post} onClose={() => setShowModal(false)} />
                </Modal>
            )}

        </>
    )
}

export default DeleteCommentModal;
