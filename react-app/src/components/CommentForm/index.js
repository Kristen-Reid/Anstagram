import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllComments, getAComment, createComment } from '../../store/comment';
import './commentForm.css';


const CommentForm = ({ post }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const comments = useSelector(state => state.comments);
    const commentArr = Object.values(comments);
    const comment = commentArr.find(comment => comment?.post_id === post?.id && user?.id === comment?.user_id);

    const [description, setDescription] = useState('');
    const [ validationErrors, setValidationErrors ] = useState([]);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        dispatch(getAllComments(comment?.id));
        dispatch(getAComment(comment?.id));
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
        <div className='comment-form-container'>
            <div className='comment-form-box'>
                <div className='errorsContainer'>
                    {showError && (
                    <ul className='form-errors'>
                        {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                    )
                    }
                </div>
                <div className='comment-form'>
                    <form className='comment-input-form' onSubmit={onSubmit}>
                        <div className='comment-input-box'>
                            <div className='comment-input-text'>
                                <textarea
                                        className='postCommentInput'
                                        placeholder='Add a comment...'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                            </div>
                            <div>
                                <button className='comment-post-btn comment-postcard-btn' type='submit'>Post</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}


export default CommentForm;
