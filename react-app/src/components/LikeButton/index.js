import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Unlike from '../../svgImg/like-hollow.svg';
import Like from '../../svgImg/like-solid.svg';
import { getAllLikes, addALike, deleteALike } from '../../store/like';
import '../LikeButton/likeButton.css';


const LikeButton = ({ post, isActive, handleChangeActive, id }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const likes = useSelector(state => state.likes);
    const likesArr = Object.values(likes);
  

  const likedPost = async (id) => {
   dispatch(addALike(id))
  }

  const unlikedPost = async (id) => {
   dispatch(deleteALike(id))
  }

    return (
      <div className="toggle-wrapper">
        {isActive ? (
          <img
            className="active"
            src={Like}
            alt="solid like"
            onClick={() => unlikedPost(id)}
          />
        ) : (
          <img
            className="inactive"
            src={Unlike}
            alt="hollow like"
            onClick={() => likedPost(id)}
          />
        )}
      </div>
    )
}


export default LikeButton;
