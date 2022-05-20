import React from 'react';
import EditPostFormModal from '../EditPostFormModal';
import DeletePostModal from '../DeletePostModal';
import '../PostMenuModal/postMenu.css';


const PostMenu = ({ id, post, closeCommentModal }) => {

    return (
        <div className='comment-menu-container'>
            <div className='comment-menu-box post-menu-box'>
                <div className='comment-edit-btn'>
                    <EditPostFormModal id={id} post={post} closeCommentModal={closeCommentModal} />
                </div>
                <div className='comment-menu-delete' >
                    <DeletePostModal post={post} closeCommentModal={closeCommentModal} />
                </div>
                <div className='omment-menu-cancel'>
                    <button className='comment-menu-btn cancel-btn' onClick={() => closeCommentModal()}>Cancel</button>
                </div>
            </div>
        </div>
    )
}


export default PostMenu;
