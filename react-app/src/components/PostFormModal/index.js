import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PostForm from './PostForm';
import { ReactComponent as AddPost } from '../../svgImg/add-post.svg';

const PostFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <a className='navLink' onClick={() => setShowModal(true)}><AddPost /></a>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PostForm />
                </Modal>
            )}
        </>
    )
}

export default PostFormModal;
