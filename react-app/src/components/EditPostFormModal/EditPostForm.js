import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts, getAPost, updatePost } from '../../store/post';
import './editPostForm.css';


const EditPostForm = ({ id, close }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)
    const posts = useSelector(state => state.posts);
    const postArr = Object.values(posts)
    const post = postArr.find(post => post?.id === id)

    const [ summary, setSummary ] = useState('');
    const [ validationErrors, setErrors ] = useState([]);
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


        let updatedPost = await dispatch(updatePost(editPostForm, post?.id))
            close()
    }

    return (
    <div className='edit-post-conatiner'>
        {user?.id === post?.user?.id && (
                <div className='edit-post-box'>
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
                    <div className='edit-post-form-container'>
                        <form onSubmit={onSubmit}>
                            <div>
                                <textarea
                                    className='postInput'
                                    placeholder='Summary'
                                    value={summary}
                                    onChange={(e) => setSummary(e.target.value)}
                                />
                            </div>
                            <div>
                                <button type='submit'>Button</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}


export default EditPostForm;
