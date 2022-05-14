import React, { useState } from 'react';
import EditPostForm from './EditPostForm';
import { Modal } from '../../context/Modal';
import Popup from 'reactjs-popup';
import { ReactComponent as PostMenu } from '../../svgImg/three-dots.svg';


const EditPostFormModal = ({ id }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* <Popup trigger={<a className="button"> <PostMenu /> </a>} modal>
                <EditPostForm id={id}/>
            </Popup> */}

            <a className='navLink' onClick={() => setShowModal(true)}><PostMenu /></a>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditPostForm id={id} close={() => setShowModal(false)}/>
                </Modal>
            )}
        </>
    )
}


export default EditPostFormModal;
