import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../../store/post';
import { getAllLikes } from '../../store/like';
import { useParams, useHistory } from 'react-router-dom';
import '../ProfilePage/profilePage.css';
import Footer from '../Footer';



const ProfilePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userId } = useParams();
    const [user, setUser] = useState({});

    const posts = useSelector(state => state.posts);
    const postArr = Object.values(posts);
    const post = postArr.filter(post => post?.user_id === user?.id)
    console.log(postArr)

    useEffect(() => {
        dispatch(getAllPosts());
        dispatch(getAllLikes());
    }, [dispatch]);


  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  console.log(user)


    return (
      <div className='profile-page-container'>
        <div className='profile-page-top-container'>
            {user?.image_url && (
                <img
                    className='profile-page-pic'
                    src={user?.image_url}
                />
                )}
          <div className='profile-page-top'>
            <div className='profile-username'>
                {user?.username}
            </div>
            <div className='profile-descrip'>
                {user?.description}
            </div>
          </div>
        </div>
        <div className='line-container'>
            <div className='line'></div>
          </div>
            <div className='profile-container'>
                {post?.reverse().map((post) => (
                    <div
                        className='profile-pic-card'
                        key={post?.id}
                        onClick={() => history.push(`/posts/${post?.id}`)}
                    >
                        <img className='profile-pic-box'
                            src={post?.media_url}
                            alt='image'
                        />
                </div>
                ))}

            </div>
            <div className='profile-page-footer2'>
                <Footer />
            </div>
        </div>
    )
}


export default ProfilePage;
