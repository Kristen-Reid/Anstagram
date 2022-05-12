import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import '../PostCard/postCard.css'


const PostCard = ({id, image, summary, updateddAt, updatedAt, userId}) => {

    const user = useSelector(state => state.session.user);

    return (
        <div className='post-box-conatianer'>
            <div className='post-box-main'>
                <div className='post-box-top'>{userId}</div>
                <div className='post-box-image'>
                    <img className='post-image' src={image} alt='image'/>
                </div>
                <div className='post-box-bottom'>
                    <div className='post-summary'>
                       {userId}  {summary}
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
