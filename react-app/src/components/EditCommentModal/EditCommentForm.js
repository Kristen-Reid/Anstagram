import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllComments, getAComment, updateComment } from '../../store/comment';
import './editCommentForm.css';


const EditCommentForm = ({ post, comment, onClose, closeCommentModal }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);

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
        if (updatedComment) {
            setValidationErrors(updatedComment)
        } else {
            closeCommentModal()
        }
    }

    console.log()

    return (
        <div className='edit-comment-container'>
            <div className='edit-comment-box'>
                <div className='edit-comment-form-container'>
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
                    <form onSubmit={onSubmit}>
                        <div>
                            <div className='edit-comment-textarea-container'>
                                <textarea
                                    className='comment-input'
                                    placeholder='Edit comment...'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div>
                                <button className='comment-menu-btn edit-btn' type='submit'>Edit Comment</button>
                            </div>
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


export default EditCommentForm;
