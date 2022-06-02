import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SinglePostModal from '../SinglePostModal';
import PostCommentForm from '../PostCommentForm';
import { getAllPosts } from '../../store/post';
import PostMenuModal from '../PostMenuModal';
import LikeButton from '../LikeButton';
import { addALike, getAllLikes } from '../../store/like';
import '../PostCard/postCard.css'


const PostCard = ({ id, image, summary, createdAt, updatedAt, userId, username, post, active }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const comments = useSelector(state => state.comments);
    const commentsArr = Object.values(comments);
    const comment = commentsArr.filter(comment => comment?.post_id === id);

    const [isActive, setIsActive] = useState(active);


    useEffect(() => {
        dispatch(getAllPosts());
        dispatch(getAllLikes());
        // if (active === true) {
        //     setIsActive(true)
        // }
    }, [dispatch]);

     const handleChangeActive = (id) => {
         dispatch(addALike(id))
         setIsActive((previousLike) => {
        return !previousLike;
    });
  };

    return (
        <div className='post-box-conatianer'>
            <div className='post-box-main'>
                <div className='post-box-top'>
                    <div className='top-box'>
                        {username}
                    </div>
                    {user?.id === userId && (
                        <div className='top-box'>
                            <div>
                                <PostMenuModal id={id} post={post}/>
                            </div>
                        </div>
                    )}
                </div>
                <div className='post-box-bottom'>
                    <img className='post-image' src={image} alt='image' />
                    <div className='post-like-btn'>
                        <LikeButton isActive={active} id={id}/>
                    </div>
                    <div className='post-summary'>
                        <div className='summary-box username'>
                            {username}
                        </div>
                        <div className='summary-box summary'>
                            {summary}
                        </div>
                    </div>
                        {comment?.length > 0 && (
                        <div className='comment-count comment-count-btn'>
                            <SinglePostModal id={id} post={post} active={active} />
                        </div>
                        )}
                    <div className='updatedAt'>
                        {updatedAt}
                    </div>
                    <div className='post-comment-bottom-description'>
                        <PostCommentForm post={post} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;
