import React, { useState } from 'react';
import EditCommentForm from './EditCommentForm';
import { Modal } from '../../context/Modal';


const EditCommentModal = ({post, closeCommentModal}) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='navLink comment-menu-btn' onClick={() => { setShowModal(true) }}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditCommentForm post={post} onClose={() => setShowModal(false)} closeCommentModal={closeCommentModal}/>
                </Modal>
            )}

        </>
    )
}

export default EditCommentModal;
