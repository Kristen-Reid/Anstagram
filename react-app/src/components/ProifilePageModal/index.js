import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/post';
import { getAllComments } from '../../store/comment';
import { Modal } from '../../context/Modal';
import { getAllLikes } from '../../store/like';
import ProfilePageCard from '../ProfilePage/ProfilePageCard';
import SinglePost from '../SinglePostModal/SinglePost';


const ProfilePageModal = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const posts = useSelector(state => state.posts);
    const postArr = Object.values(posts);
    const profile = postArr.find(post => post?.user_id === user?.id);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(getAllPosts())
        // dispatch(getAllComments(id))
        dispatch(getAllLikes());
    }, [dispatch])

    return (
        <>
            <button className='navLink comment-count-btn' onClick={() => setShowModal(true)}><ProfilePageCard /></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SinglePost close={() => setShowModal(false)}/>
                </Modal>
            )}

        </>
    )
}

export default ProfilePageModal;
