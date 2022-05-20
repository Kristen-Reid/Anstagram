import React, { useState } from 'react';
import EditPostForm from './EditPostForm';
import { Modal2 } from '../../context/Modal2';


const EditPostFormModal = ({ id, post, closeCommentModal }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <a className='navLink comment-menu-btn edit-btn' onClick={() => setShowModal(true)}>Edit Post</a>
            {showModal && (
                <Modal2 onClose={() => setShowModal(false)}>
                    <EditPostForm id={id} post={post} close={() => setShowModal(false)} closeCommentModal={closeCommentModal} />
                </Modal2>
            )}
        </>
    )
}


export default EditPostFormModal;
