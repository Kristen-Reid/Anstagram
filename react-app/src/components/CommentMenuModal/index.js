import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SinglePost from './SinglePost';
import { getAllPosts } from '../../store/post';
import { getAllComments } from '../../store/comment';
import { Modal } from '../../context/Modal';
import { ReactComponent as AddPost } from '../../svgImg/add-post.svg';


const CommentMenuModal = () => {
    // const dispatch = useDispatch();
    // const comments = useSelector(state => state.comments);
    // const commentsArr = Object.values(comments);
    // const comment = commentsArr.filter(comment => comment?.post_id === id);

    const [showModal, setShowModal] = useState(false);

    // useEffect(() => {
    //     dispatch(getAllPosts())
    //     dispatch(getAllComments(id))
    // }, [dispatch])

    return (
        <>
            <button className='navLink comment-menu-btn' onClick={() => setShowModal(true)}><AddPost /></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SinglePost id={id} post={post} close={() => setShowModal(false)}/>
                </Modal>
            )}

        </>
    )
}

export default CommentMenuModal;
