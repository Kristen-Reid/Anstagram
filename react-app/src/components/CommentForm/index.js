import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllComments, getAComment,createComment } from '../../store/comment';
import './commentForm.css';


const CommentForm = ({ post }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const [description, setDescription] = useState('');
    const [ validationErrors, setErrors ] = useState([]);
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

        setDescription('');
    }


    return (
        <div className='comment-form-container'>
            <div className='comment-form-box'>
                {/* <div className='errorsContainer'>
                    {showError && (
                    <ul className='errors'>
                        {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                    )
                    }
                </div> */}
                <div className='comment-form'>
                    <form onSubmit={onSubmit}>
                        <div className='comment-input-box'>
                            <div className='comment-input-text'>
                                <textarea
                                        className='commentInput'
                                        placeholder='Add a comment...'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                            </div>
                            <div>
                                <button className='comment-post-btn' type='submit'>Post</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}


export default CommentForm;
