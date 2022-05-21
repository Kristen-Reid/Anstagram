import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getAllPosts, getAPost, createPost } from '../../store/post';
import './post.css';


const PostForm = ({ close }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)

    const [image, setImage] = useState('');
    const [imageLoading, setImageLoading] = useState(false);
    const [ summary, setSummary ] = useState('');
    const [ validationErrors, setValidationErrors ] = useState([]);
    const [ showError, setShowError ] = useState(false);

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);


    const onSubmit = async (e) => {
        e.preventDefault();
        setShowError(true);
        setImageLoading(true);

        const formData = new FormData();
        formData.append('image', image);
        formData.append('summary', summary);
        formData.append('userId', user?.id)



        let newPost = await dispatch(createPost(formData));
        setImageLoading(false);
        if (newPost) {
            setValidationErrors(newPost);
        } else {
            close();
        }

    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }


    return (
        <div className='post-form-conatiner'>
            <div className='post-form-box'>
                <div className='create-post-top'>
                    <p>Create new post</p>
                <div className='errorsContainer2'>
                    {showError && (
                    <ul className='form-errors'>
                        {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                    )
                    }
                </div>
                </div>
                <div className='create-post-bottom'>
                    <div className='post-form'>
                        <form onSubmit={onSubmit}>
                            <div>
                                <textarea
                                    className='post-Input'
                                    placeholder='Add summary...'
                                    value={summary}
                                    onChange={(e) => setSummary(e.target.value)}
                                />
                            </div>
                            <div className='upload-btn-container'>
                                <div className='post-upload'>
                                    <label className='post-upload'>Select image from computer
                                        <input
                                        className='hidden'
                                        type='file'
                                        accept='image/*'
                                        onChange={updateImage}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <button className='post-form-btn'
                                        type="submit"
                                        disabled={imageLoading}
                                    >Add Post</button>
                                    {(imageLoading)&& <p>Loading...</p>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PostForm;
