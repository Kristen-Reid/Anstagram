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

    const [ url, setUrl ] = useState('');
    const [image, setImage] = useState('');
    const [imageLoading, setImageLoading] = useState(false);
    const [ summary, setSummary ] = useState('');
    const [ validationErrors, setErrors ] = useState([]);
    const [ showError, setShowError ] = useState(false);

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);



    const onSubmit = async (e) => {
        e.preventDefault();
        setShowError(true);

        const formData = new FormData();
        formData.append('image', image);
        formData.append('summary', summary)
        formData.append('userId', user?.id)

        // setImageLoading(true);
        console.log(image, '!!!!!!!!!!')

        let newPost = await dispatch(createPost(formData))

    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
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
                                    type='file'
                                    accept='image/*'
                                    onChange={updateImage}
                                />
                            </div>
                            <div>
                                <textarea
                                    className='postInput'
                                    placeholder='Summary'
                                    value={summary}
                                    onChange={(e) => setSummary(e.target.value)}
                                />
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                                {(imageLoading)&& <p>Loading...</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PostForm;
