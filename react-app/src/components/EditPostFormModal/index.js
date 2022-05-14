import React, { useState } from 'react';
import EditPostForm from './EditPostForm';
import Popup from 'reactjs-popup';
import { ReactComponent as PostMenu } from '../../svgImg/three-dots.svg';


const EditPostFormModal = () => {
    return (
        <>
            <Popup trigger={<a className="button"> <PostMenu /> </a>} modal>
              <EditPostForm />
            </Popup>
        </>
    )
}


export default EditPostFormModal;
