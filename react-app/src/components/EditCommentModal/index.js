import React, { useState } from 'react';
import EditCommentForm from './EditCommentForm';
import { Modal } from '../../context/Modal';


const EditCommentModal = ({post}) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='navLink comment-menu-btn' onClick={() => { setShowModal(true) }}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditCommentForm post={post} onClose={() => setShowModal(false)}/>
                </Modal>
            )}

        </>
    )
}

export default EditCommentModal;
