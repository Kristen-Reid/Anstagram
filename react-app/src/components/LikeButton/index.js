import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Cloud } from '../../svgImg/love-cloud.svg';
import { getAllLikes, addALike } from '../../store/like';
import '../LikeButton/likeButton.css';


const LikeButton = ({ post }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const likes = useSelector(state => state.likes);
    console.log(likes)

    const [like, setLike] = useState(null);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        dispatch(getAllLikes());
        dispatch(addALike(post?.id))
    }, [dispatch]);

    return (
        <button
            onClick={() => { setLike(!like); setClicked(true) }}
            onAnimationEnd={() => setClicked(false)}
            className={('like-button-container', { like, clicked })}
        >
            <div className='like-btn'>
                <Cloud />
            </div>
        </button>
    )
}


export default LikeButton;
