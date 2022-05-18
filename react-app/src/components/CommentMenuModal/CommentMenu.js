import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getAllPosts, getAPost, createPost } from '../../store/post';
import EditCommentModal from '../EditCommentModal';
import DeleteCommentModal from '../DeleteCommentModal';
import '../CommentMenuModal/commentMenu.css';


const CommentMenu = ({post, close}) => {

    return (
        <div className='comment-menu-container'>
            <div className='comment-menu-box'>
                <div className='comment-edit-btn'>
                    <EditCommentModal post={post}/>
                </div>
                <div className='comment-menu-delete' >
                    <DeleteCommentModal post={post} />
                </div>
                <button onClick={() => close()}>Cancel</button>
            </div>
        </div>
    )
}


export default CommentMenu;
