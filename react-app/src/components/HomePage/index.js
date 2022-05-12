import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import PostCard from '../PostCard';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../../store/post';
import '../HomePage/home.css'


const HomePage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const posts = useSelector(state => state.posts)
    const postArr = Object.values(posts)
    console.log(postArr)


    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    return (
        <div className="home-page-container">
                <div className='home-title'>
                    {postArr.map((post) => (
                        <PostCard key={post?.id}
                            id={post?.id}
                            image={post?.media_url}
                            summary={post?.summary}
                            createdAt={post?.created_at}
                            updatedAt={moment().startOf('hour').fromNow()}
                            userId={post?.user_id}
                        />

                    ))}
                </div>
            </div>
    )
}


export default HomePage;
