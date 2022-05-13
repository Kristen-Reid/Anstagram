import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getAllPosts, getAPost, createPost } from '../../store/post';
import './post.css';


const PostForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const user = useSelector(state => state.session.user)
    const posts = useSelector(state => state.posts);
    const postsArr = Object.values(posts);

    const [url, setUrl] = useState('');
    const [ mediaUrl, setMediaUrl ] = useState('');
    const [summary, setSummary] = useState('');
    const [validationErrors, setErrors] = useState([]);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    useEffect(() => {
        const errors = [];

        const validImage = /\.(jpg|jpeg|png|gif)$/

        // if (!url.length) errors.push('Please provide a URL for image');
        if (!validImage.test(mediaUrl)) errors.push('Please provide a valid image URL');
        if (!mediaUrl) errors.push('Please provide an image file')
        // if (!summary.length) errors.push('Please provide a summary')

        setErrors(errors);
    }, [mediaUrl, summary]);


    const onSubmit = async (e) => {
        e.preventDefault();
        setShowError(true);

        const postForm = {
            mediaUrl,
            summary,
            userId: user?.id
        }

        if (validationErrors.length === 0) {
            let newPost = await dispatch(createPost(postForm))
            if (newPost) {
                history.push(`/home`);
            }
        }
    }


    return (
        <div className='post-form-conatiner'>
            <div className='post-form-box'>
                <div className='errorsContainer'>
                    {showError && (
                    <ul className='errors'>
                        {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                    )
                    }
                </div>
                <div className='create-post-top'>
                    <p>Create new post</p>
                </div>
                <div className='create-post-bottom'>
                    <div className='post-form-container'>
                        <form onSubmit={onSubmit}>
                            <div>
                                <input
                                    className='hidden'
                                    type='file'
                                    placeholder='Post Image'
                                    accept='image/*'
                                    value={mediaUrl}
                                    onChange={(e) => {
                                        // setUrl((e.target.value));
                                        setMediaUrl(e.target.value);
                                    }}
                                />
                            </div>
                            <div>
                                <textarea
                                    className='postInput'
                                    placeholder='Summary'
                                    onChange={(e) => setSummary(e.target.value)}
                                />
                            </div>
                            <div>
                                <button
                                    type='submit'
                                    className='postBtn'
                                >Make New Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PostForm;
