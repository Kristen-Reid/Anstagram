import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Popup from 'reactjs-popup';
import PostForm from './PostForm';
import { ReactComponent as AddPost } from '../../svgImg/add-post.svg';

const PostFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <a className='navLink' onClick={() => setShowModal(true)}><AddPost /></a>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PostForm close={() => setShowModal(false)}/>
                </Modal>
            )}

            {/* <Popup trigger={<a className="button" onClick={() => setShowModal(false)}> <AddPost /> </a>} modal>
                <PostForm close={() => setShowModal(false)}/>
            </Popup> */}
        </>
    )
}

export default PostFormModal;
