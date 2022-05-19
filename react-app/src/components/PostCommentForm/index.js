import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllComments, getAComment, createComment } from '../../store/comment';
import './postCommentForm.css';


const PostCommentForm = ({ post }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const [description, setDescription] = useState('');
    const [ validationErrors, setValidationErrors ] = useState([]);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        dispatch(getAllComments(post?.id));
        dispatch(getAComment(post?.id));
    }, [dispatch]);

    const onSubmit = async (e) => {
        e.preventDefault();
        setShowError(true);

        const commentForm = {
            description
        }

        let newComment = await dispatch(createComment(commentForm, post?.id));
        if (newComment) {
            setValidationErrors(newComment);
        } else {
            setDescription('');
            setValidationErrors([])
        }
    }


    return (
        <div className='post-comment-form-container'>
            <div className='post-comment-form-box'>
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
                <div className='post-comment-form'>
                    <form onSubmit={onSubmit}>
                        <div className='post-comment-input-box'>
                            <div className='post-comment-input-text'>
                                <textarea
                                        className='postCommentInput'
                                        placeholder='Add a comment...'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                            </div>
                            <div>
                                <button className='post-comment-btn comment-postcard-btn' type='submit'>Post</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}


export default PostCommentForm;
