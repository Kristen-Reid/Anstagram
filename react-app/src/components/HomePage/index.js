import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import PostCard from '../PostCard';
import CommentBox from '../CommentBox'
import { useParams } from 'react-router-dom';
import { getAllPosts } from '../../store/post';
import { getAllComments } from '../../store/comment';
import '../HomePage/home.css'


const HomePage = () => {
    const dispatch = useDispatch();
    const {id} = useParams()
    const user = useSelector(state => state.session.user);
    const posts = useSelector(state => state.posts);
    const comments = useSelector(state => state.comments);
    const postArr = Object.values(posts);
    const commentArr = Object.values(comments);
    console.log(commentArr)


    useEffect(() => {
        dispatch(getAllPosts())
        dispatch(getAllComments())
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
                            userId={post?.user?.id}
                            username={post?.user?.username}
                        />

                    ))}
                    <div className='comment-container'>
                        {commentArr.map((comment) => (
                            <CommentBox key={comment?.id}
                                id={comment?.id}
                                description={comment?.description}
                                userId={comment?.user?.id}
                                username={comment?.user?.username}
                                postId={comment?.post?.id}
                                createdAt={comment?.created_at}
                                updatedAt={moment().startOf('hour').fromNow()}
                            />
                        ))}
                    </div>
            </div>
            </div>
    )
}


export default HomePage;
