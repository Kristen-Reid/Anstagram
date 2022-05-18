import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllComments, getAComment, updateComment } from '../../store/comment';
import './editCommentForm.css';


const EditCommentForm = ({ post, onClose, closeCommentModal }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const comments = useSelector(state => state.comments);
    const commentArr = Object.values(comments);
    const comment = commentArr.find(comment => comment?.post_id === post?.id && user?.id === comment?.user_id);

    const [ description, setDescription ] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        dispatch(getAllComments(comment?.id));
        dispatch(getAComment(comment?.id));
    }, [dispatch]);


    useEffect(() => {
        setDescription(comment?.description);
    }, [comment]);


    const onSubmit = async (e) => {
        e.preventDefault();
        setShowError(true);

        const editCommentForm = {
            description
        }


        let updatedComment = await dispatch(updateComment(editCommentForm, comment?.id))
        // onClose()
        closeCommentModal()
    }

    return (
        <div className='edit-comment-container'>
            <div className='edit-comment-box'>
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
                <div className='edit-comment-form-container'>
                    <form onSubmit={onSubmit}>
                        <div>
                            <div>
                                <textarea
                                    className='comment-input'
                                    placeholder='Edit comment...'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div>
                                <button type='submit'>Button</button>
                            </div>
                        </div>
                    </form>
                            <div>
                                <button type='submit' onClick={() => closeCommentModal()}>Cancel</button>
                            </div>
                </div>
            </div>
        </div>
    )
}


export default EditCommentForm;
