import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
import CommentForm from '../CommentForm';
import { getAComment, getAllComments } from '../../store/comment';
import { getAllPosts } from '../../store/post';
import { getAllLikes, addALike } from '../../store/like';
import CommentMenuModal from '../CommentMenuModal';
import LikeButton from '../LikeButton';
import './singlePost.css';

const SinglePost = ({ id, close, post, active }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user);
    const comments = useSelector(state => state.comments);
    const commentsArr = Object.values(comments);
    const comment = commentsArr.filter(comment => comment?.post_id === post?.id);
    const likes = useSelector(state => state.likes);
    const likesArr = Object.values(likes);
    const liked = likesArr?.filter((like) => +like?.post_id === +post?.id);


    const [isActive, setIsActive] = useState(active);


    useEffect(() => {
        dispatch(getAllPosts());
        dispatch(getAllLikes());
        dispatch(getAllComments(id));
        dispatch(getAComment(id));
    }, [dispatch]);

    const handleChangeActive = (id) => {
         dispatch(addALike(id))
         setIsActive((previousLike) => {
        return !previousLike;
    });
  }

    return (
        <div className='single-post-container'>
            <div className='single-box-main'>
                    <img className='post-comment-image' src={post?.media_url} alt='image'/>
                <div className='comment-container'>
                    <div className='comment-top'>
                        <div className='comment-user' onClick={() => history.push(`/users/${post?.user?.id}`)}>{post?.user?.username}</div>
                    </div>
                    <div className='comment-box'>
                        <div className='comment-caption'>
                            <div className='comment-user' onClick={() => history.push(`/users/${post?.user?.id}`)}>{post?.user?.username}</div>
                            <div className='comment-summary'>{post?.summary}</div>
                        </div>
                        {comment.map((comment) => (
                            <div className='comments-content' key={comment?.id}>
                                <div className='comment-user-2' onClick={() => history.push(`/users/${comment?.user?.id}`)}>{comment?.user?.username}</div>
                                    <div className='comment-summary-2'>{comment?.description}</div>
                                <div className='comment-menu'>
                                    {user?.id === comment?.user_id && (
                                        <CommentMenuModal post={post} comment={comment}/>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='comment-bottom'>
                        <div>
                            <LikeButton isActive={active} id={id} />
                        </div>
                        {liked?.length === 1 ? (
                            <div className='likes-text liked'>
                                {liked?.length} Like
                            </div>
                        ) : (
                                <div className='unlike-text unliked'>
                                  {liked?.length} Likes
                            </div>
                        )}
                    <div className='comment-updatedAt'>{moment().startOf('hour').fromNow()}</div>
                    </div>
                    <div className='comment-bottom-description'>
                        <CommentForm post={post} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SinglePost;
