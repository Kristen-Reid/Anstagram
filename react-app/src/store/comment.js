const ALL_COMMENTS = 'comments/ALL_COMMENTS';
const ONE_COMMENT = 'comments/ONE_COMMENT';
const ADD_COMMENT = 'comments/ADD_COMMENT';
const UPDATE_COMMENT = 'comments/UPDATE_COMMENT';
const DELETE_COMMENT = 'comments/DELETE_COMMENT';


const getComments = (comments) => {
    return {
        type: ALL_COMMENTS,
        payload: comments
    }
}

const oneComment = (comment) => {
    return {
        type: ONE_COMMENT,
        payload: comment
    }
}

const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}

const editComment = (comment) => {
    return {
        type: UPDATE_COMMENT,
        payload: comment
    }
}

const deleteAComment = (id) => {
    return {
        type: DELETE_COMMENT,
        payload: id
    }
}


export const getAllComments = () => async (dispatch) => {
    const response = await fetch(`/api/comments/`);

    if (response.ok) {
        const comment = await response.json();
        dispatch(getComments(comment));
        return response;
    }
};


export const getAComment = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}`);

    if (response.ok) {
        const comment = await response.json();
        dispatch(oneComment(comment));
        return response;
    }
};


export const createComment = (data, id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(addComment(comment));
        return response;
    }
};


export const updateComment = (data, id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const comment = await response.json();
        dispatch(editComment(comment));
        return response;
    }
};

export const deleteComment = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}/delete`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(deleteAComment(id));
    }
};


const commentsReducer = (state = {}, action) => {
    switch (action.type) {
        case ALL_COMMENTS:
            const allComments = {};
            action.payload.comments.forEach((comment) => {
                allComments[comment.id] = comment
            });
            return getAllComments;
        case ONE_COMMENT:
            return { ...state, [action.payload.id]: action.payload }
        case ADD_COMMENT: {
            const newState = { ...state };
            newState[action.payload.id] = action.payload
            return newState;
        }
        case UPDATE_COMMENT: {
            const newState = { ...state };
            newState[action.payload.id] = action.payload
            return newState;
        }
        case DELETE_COMMENT: {
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        }
        default:
            return state
    }
};


export default commentsReducer;
