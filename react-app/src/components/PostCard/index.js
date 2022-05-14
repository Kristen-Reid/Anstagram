import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import EditPostFormModal from '../EditPostFormModal';
import '../PostCard/postCard.css'


const PostCard = ({id, image, summary, createdAt, updatedAt, userId, username }) => {

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
                        <EditPostFormModal id={id}/>
                        </div>
                    )}
                </div>
                    <img className='post-image' src={image} alt='image'/>
                <div className='post-box-bottom'>
                    <div className='post-summary'>
                        <div className='summary-box username'>
                            {username}
                        </div>
                        <div className='summary-box'>
                            {summary}
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
