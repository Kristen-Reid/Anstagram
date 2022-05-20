import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import PostCard from '../PostCard';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../../store/post';
import { getAllComments } from '../../store/comment';
import '../HomePage/home.css'


const HomePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const posts = useSelector(state => state.posts);
    const comments = useSelector(state => state.comments);
    const postArr = Object.values(posts);



    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    return (
        <div className="home-page-container">
                <div className='home-title'>
                    {postArr.reverse().map((post) => (
                        <PostCard key={post?.id}
                            id={post?.id}
                            image={post?.media_url}
                            summary={post?.summary}
                            createdAt={post?.created_at}
                            updatedAt={moment().startOf('hour').fromNow()}
                            userId={post?.user?.id}
                            username={post?.user?.username}
                            post={post}
                        />

                    ))}
            </div>
            </div>
    )
}


export default HomePage;
