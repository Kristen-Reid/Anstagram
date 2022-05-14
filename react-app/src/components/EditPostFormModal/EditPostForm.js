import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts, updatePost } from '../../store/post';
import './editPostForm.css';


const EditPostForm = () => {
    return (
        <div className='edit-post-conatiner'>
            <div className='edit-post-box'>
                <h1>HIIIIII</h1>
            <button>Button</button>
            </div>
        </div>
    )
}


export default EditPostForm;
