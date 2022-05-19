import React, { useState } from 'react';
import EditCommentForm from './EditCommentForm';
import { Modal } from '../../context/Modal';


const EditCommentModal = ({post, comment, closeCommentModal}) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='navLink comment-menu-btn edit-btn' onClick={() => { setShowModal(true) }}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditCommentForm post={post} comment={comment} onClose={() => setShowModal(false)} closeCommentModal={closeCommentModal}/>
                </Modal>
            )}

        </>
    )
}

export default EditCommentModal;
