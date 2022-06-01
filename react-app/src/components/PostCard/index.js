import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../../store/post';
import SinglePostModal from '../SinglePostModal';
import PostCommentForm from '../PostCommentForm';
import { getAllPosts } from '../../store/post';
import { getAllComments } from '../../store/comment';
import EditPostFormModal from '../EditPostFormModal';
import PostMenuModal from '../PostMenuModal';
import LikeButton from '../LikeButton';
import '../PostCard/postCard.css'
import { getAllLikes } from '../../store/like';


const PostCard = ({ id, image, summary, createdAt, updatedAt, userId, username, post }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const comments = useSelector(state => state.comments);
    const commentsArr = Object.values(comments);
    const comment = commentsArr.filter(comment => comment?.post_id === id);

    const [active, setActive] = useState(false);


    useEffect(() => {
        dispatch(getAllPosts());
        dispatch(getAllLikes());
    }, [dispatch]);

     const handleChangeActive = () => {
        setActive((previousLike) => {
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
                        <LikeButton post={post} active={active} handleChangeActive={handleChangeActive} />
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
                                <SinglePostModal id={id} post={post} />
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
