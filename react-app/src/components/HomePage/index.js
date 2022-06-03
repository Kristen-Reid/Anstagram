import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import PostCard from '../PostCard';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../../store/post';
import { getAllComments } from '../../store/comment';
import '../HomePage/home.css'
import { getAllLikes } from '../../store/like';


const HomePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector(state => state.session.user);
    const posts = useSelector(state => state.posts);
    const comments = useSelector(state => state.comments);
    const postArr = Object.values(posts);
    const likes = useSelector(state => state.likes);
    const likesArr = Object.values(likes);



    useEffect(() => {
        dispatch(getAllPosts());
        dispatch(getAllLikes());
    }, [dispatch]);

    return (
        <div className="home-page-container">
                <div className='home-title'>
                {postArr?.reverse().map((post) => {
                    let active = false
                    likesArr?.map((like) => {
                      if (like?.post_id === post?.id &&  +like?.user_id === +user?.id) active = true
                    })
                 return  <PostCard key={post?.id}
                        id={post?.id}
                        image={post?.media_url}
                        summary={post?.summary}
                        createdAt={post?.created_at}
                        updatedAt={moment().startOf('hour').fromNow()}
                        userId={post?.user?.id}
                        username={post?.user?.username}
                        post={post}
                        active={active}
                    />
                })
                    }
            </div>
            </div>
    )
}


export default HomePage;
