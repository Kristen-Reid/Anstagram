const GET_LIKES = 'like/GET_LIKES';
const ADD_LIKE = 'like/ADD_LIKE';
const DELETE_LIKE = 'like/DELETE_LIKE';

const getLikes = (likes) => {
    return {
        type: GET_LIKES,
        payload: likes
    }
}

const addLike = (like) => {
    return {
        type: ADD_LIKE,
        payload: like
    }
}

const deleteLike = (like) => {
    return {
        type: DELETE_LIKE,
        payload: like
    }
}


export const getAllLikes = () => async (dispatch) => {
    const response = await fetch(`/api/likes/`);

    if (response.ok) {
        const like = await response.json();
        dispatch(getLikes(like));
        return response;
    }
};

export const addALike = (data, id) => async (dispatch) => {
    const response = await fetch(`/api/likes/add${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const like = await response.json();
        dispatch(addLike(like));
        return response;
    }
};


export const deleteALike = (id) => async (dispatch) => {
    const response = await fetch(`/api/likes/del/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(deleteLike(id));
    }
};


const likesReducer = (state = [], action) => {
    switch (action.type) {
        case GET_LIKES: {
            const getAllLikes = {}
            action.payload.likes.forEach((like) => {
                getAllLikes[like.id] = like;
            });
            return getAllLikes;
        }
        case ADD_LIKE: {
            const newState = { ...state };
            newState[action.payload.id] = action.payload;
            return newState;
        }
        case DELETE_LIKE: {
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default likesReducer;
