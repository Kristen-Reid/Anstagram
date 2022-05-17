import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllComments, createComment } from '../../store/comment';
import './commentForm.css';


const CommentForm = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id)
    const user = useSelector(state => state.session.user);

    const [description, setDescription] = useState('');
    const [ validationErrors, setErrors ] = useState([]);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        dispatch(getAllComments(id))
    }, [dispatch]);

    return (
        <div>

        </div>
    )
}


export default CommentForm;
