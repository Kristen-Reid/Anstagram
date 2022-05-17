import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/post';
import { getAllComments } from '../../store/comment';
import { Modal } from '../../context/Modal';
import SinglePost from './SinglePost';


const SinglePostModal = ({ id, post }) => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments);
    const commentsArr = Object.values(comments);
    const comment = commentsArr.filter(comment => comment?.post_id === id)

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(getAllPosts())
        dispatch(getAllComments(id))
    }, [dispatch])

    return (
        <>
            <button className='navLink comment-count-btn' onClick={() => setShowModal(true)}>View {comment?.length} comments</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SinglePost id={id} post={post} close={() => setShowModal(false)}/>
                </Modal>
            )}

        </>
    )
}

export default SinglePostModal;
