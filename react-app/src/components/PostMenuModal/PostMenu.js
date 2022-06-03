import React from 'react';
import EditPostFormModal from '../EditPostFormModal';
import DeletePostModal from '../DeletePostModal';
import '../PostMenuModal/postMenu.css';


const PostMenu = ({ id, post, closeCommentModal }) => {

    return (
        <div className='post-menu-container'>
            <div className='comment-menu-box'>
                    <EditPostFormModal id={id} post={post} closeCommentModal={closeCommentModal} />
                <div className='post-menu-delete' >
                    <DeletePostModal post={post} closeCommentModal={closeCommentModal} />
                </div>
                <div className='post-menu-cancel'>
                    <button className='comment-menu-btn cancel-btn' onClick={() => closeCommentModal()}>Cancel</button>
                </div>
            </div>
        </div>
    )
}


export default PostMenu;
