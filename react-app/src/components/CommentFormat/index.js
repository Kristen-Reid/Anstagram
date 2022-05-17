import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import App from '../../App'
import moment from 'moment';
import CommentBox from '../CommentBox';
import { getAllPosts } from '../../store/post';
import { getAllComments } from '../../store/comment';
import '../CommentFormat/commentFormat.css'


const CommentFormat = ({ id }) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const posts = useSelector(state => state.posts);
    const comments = useSelector(state => state.comments);
    const postArr = Object.values(posts);
    const commentArr = Object.values(comments);
    // console.log(commentArr)

    useEffect(() => {
        dispatch(getAllPosts())
        dispatch(getAllComments(id))
    }, [dispatch])
    

    return (
        <div className='comment-container'>
            {commentArr.map((comment) => (
                <CommentBox key={comment?.id}
                    id={comment?.id}
                    comment={comment}
                    description={comment?.description}
                    userId={comment?.user?.id}
                    username={comment?.user?.username}
                    postId={comment?.post?.id}
                    createdAt={comment?.created_at}
                    updatedAt={moment().startOf('hour').fromNow()}
                />
            ))}
        </div>
    )
}

export default CommentFormat;
