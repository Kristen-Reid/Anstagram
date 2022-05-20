import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts, getAPost, updatePost } from '../../store/post';
import './editPostForm.css';


const EditPostForm = ({ id, close, closeCommentModal }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)
    const posts = useSelector(state => state.posts);
    const postArr = Object.values(posts)
    const post = postArr.find(post => post?.id === id)

    const [ summary, setSummary ] = useState('');
    const [ validationErrors, setValidationErrors ] = useState([]);
    const [ showError, setShowError ] = useState(false);

    useEffect(() => {
        dispatch(getAllPosts());
        dispatch(getAPost(id));
    }, [dispatch]);

    useEffect(() => {
        setSummary(post?.summary);
    }, [post])


    const onSubmit = async (e) => {
        e.preventDefault();
        setShowError(true);

        const editPostForm = {
            summary
        }


        let updatedPost = await dispatch(updatePost(editPostForm, post?.id));
        if (updatedPost) {
            setValidationErrors(updatedPost);
        } else {
            closeCommentModal()
        }
    }

    return (
    <div className='edit-post-conatiner'>
                <div className='edit-post-box'>
                    <div className='errorsContainer'>
                        {showError && (
                        <div className='form-errors'>
                            {validationErrors.map(error => (
                                <li key={error}>{error}</li>
                            ))}
                        </div>
                        )
                        }
                    </div>
                    <div className='edit-post-form-container'>
                        <form onSubmit={onSubmit}>
                            <div>
                                <textarea
                                    className='postInput'
                                    placeholder='Edit summary...'
                                    value={summary}
                                    onChange={(e) => setSummary(e.target.value)}
                                />
                            </div>
                            <div>
                                <button className='comment-menu-btn edit-btn' type='submit'>Edit Post</button>
                            </div>
                        </form>
                            <div>
                                <button className='comment-menu-btn cancel-btn' type='submit' onClick={() => closeCommentModal()}>Cancel</button>
                            </div>
                    </div>
                </div>
        </div>
    )
}


export default EditPostForm;
