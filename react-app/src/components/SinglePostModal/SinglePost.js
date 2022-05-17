import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
import { getAComment, getAllComments } from '../../store/comment';
import { getAllPosts } from '../../store/post';
import './singlePost.css';

const SinglePost = ({ close, id, post, updatedAt }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const comments = useSelector(state => state.comments);
    const commentsArr = Object.values(comments);
    const comment = commentsArr.filter(comment => comment?.post_id === id);

    useEffect(() => {
        dispatch(getAllPosts());
        dispatch(getAllComments(id));
        dispatch(getAComment(id));
    }, [dispatch]);

    return (
        <div className='single-post-container'>
            <div className='single-box-main'>
                <div className='post-comment-image-container'>
                    <img className='post-comment-image' src={post?.media_url} alt='image'/>
                </div>
                <div className='comment-container'>
                    <div className='comment-top'>
                        <div className='comment-user'>{post?.user?.username}</div>
                    </div>
                    <div className='comment-box'>
                        <div className='comment-caption'>
                            <div className='comment-user'>{post?.user?.username}</div>
                            <div className='comment-summary'>{post?.summary}</div>
                        </div>
                        <div className='comment-updatedAt'>{moment().startOf('hour').fromNow()}</div>
                        {comment.map((comment) => (
                            <div className='comments-content' key={comment?.id}>
                                <div className='comment-user-2 '>{comment?.user?.username}</div>
                                <div className='comment-summary-2'>{comment?.description}</div>
                            </div>
                        ))}
                    </div>
                    <div className='comment-bottom'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SinglePost;
