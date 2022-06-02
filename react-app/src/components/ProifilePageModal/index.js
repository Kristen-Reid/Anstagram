import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/post';
import { getAllComments } from '../../store/comment';
import { Modal } from '../../context/Modal';
import { getAllLikes } from '../../store/like';
import ProfileCardPage from '../ProfilePage';


const ProfilePageModal = () => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments);
    const commentsArr = Object.values(comments);
    // const comment = commentsArr.filter(comment => comment?.post_id === id)

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(getAllPosts())
        // dispatch(getAllComments(id))
        dispatch(getAllLikes());
    }, [dispatch])

    return (
        <>
            <button className='navLink comment-count-btn' onClick={() => setShowModal(true)}></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ProfileCardPage close={() => setShowModal(false)}/>
                </Modal>
            )}

        </>
    )
}

export default ProfilePageModal;
