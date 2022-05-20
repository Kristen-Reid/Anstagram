import React, { useState } from 'react';
import DeletePost from './DeletePost';
import { Modal2 } from '../../context/Modal2';


const DeleteCommentModal = ({post, closeCommentModal }) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='navLink comment-menu-btn delete-btn' onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal2 onClose={() => setShowModal(false)}>
                    <DeletePost post={post} onClose={() => setShowModal(false)} closeCommentModal={closeCommentModal} />
                </Modal2>
            )}

        </>
    )
}

export default DeleteCommentModal;
