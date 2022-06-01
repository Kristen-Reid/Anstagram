import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Unlike from '../../svgImg/like-hollow.svg';
import Like from '../../svgImg/like-solid.svg';
import { getAllLikes, addALike } from '../../store/like';
import '../LikeButton/likeButton.css';


const LikeButton = ({ post, active, handleChangeActive }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const likes = useSelector(state => state.likes);
    console.log(likes)

    useEffect(() => {
        dispatch(getAllLikes());
    }, [dispatch]);

    return (
      <div className="toggle-wrapper">
        {active ? (
          <img
            className="active"
            src={Like}
            alt="solid like"
            onClick={() => handleChangeActive()}
          />
        ) : (
          <img
            className="inactive"
            src={Unlike}
            alt="hollow like"
            onClick={() => handleChangeActive()}
          />
        )}
      </div>
    )
}


export default LikeButton;
