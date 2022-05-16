import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost } from '../../store/post';
import CommentBox from '../CommentBox';
import EditPostFormModal from '../EditPostFormModal';
import '../PostCard/postCard.css'


const PostCard = ({id, image, summary, createdAt, updatedAt, userId, username }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);



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
                                <EditPostFormModal id={id}/>
                            </div>
                            <div>
                                <button onClick={() => dispatch(deletePost(id))}>Delete Spot</button>
                            </div>
                        </div>
                    )}
                </div>
                <div className='post-box-bottom'>
                    <img className='post-image' src={image} alt='image'/>
                    <div className='post-summary'>
                        <div className='summary-box username'>
                            {username}
                        </div>
                        <div className='summary-box summary'>
                            {summary}
                        </div>
                        <div>
                            <CommentBox />
                        </div>
                    </div>
                    <div className='updatedAt'>
                        {updatedAt}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;
