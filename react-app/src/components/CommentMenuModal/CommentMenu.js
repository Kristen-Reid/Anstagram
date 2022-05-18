import React from 'react';
import EditCommentModal from '../EditCommentModal';
import DeleteCommentModal from '../DeleteCommentModal';
import '../CommentMenuModal/commentMenu.css';


const CommentMenu = ({post, closeCommentModal}) => {

    return (
        <div className='comment-menu-container'>
            <div className='comment-menu-box'>
                <div className='comment-edit-btn'>
                    <EditCommentModal post={post} closeCommentModal={closeCommentModal}/>
                </div>
                <div className='comment-menu-delete' >
                    <DeleteCommentModal post={post} />
                </div>
                <button onClick={() => closeCommentModal()}>Cancel</button>
            </div>
        </div>
    )
}


export default CommentMenu;
