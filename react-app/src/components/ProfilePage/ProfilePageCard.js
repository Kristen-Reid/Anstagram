import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/post';
import { getAllComments } from '../../store/comment';
import { getAllLikes, addALike } from '../../store/like';
import SinglePostModal from '../SinglePostModal';
import { useParams } from 'react-router-dom';
// import '../ProfilePage/profilePage.css';



const ProfilePageCard = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const posts = useSelector(state => state.posts);
    const postArr = Object.values(posts);
    const profile = postArr.find(post => post?.user_id === user?.id);


    return (
        <div className='profile-page-container'>
            {/* <div className='profile-page-top'>
                {profile?.user?.username}
            </div> */}
            <div className='profile-container' >
                {postArr?.reverse().map((post) => (
                    <div className='profile-pic-card' key={post?.id}>
                        <img className='profile-pic-box'
                            src={post?.media_url}
                            alt='image'
                        />
                </div>
                ))}
            </div>
        </div>
    )
}


export default ProfilePageCard;
