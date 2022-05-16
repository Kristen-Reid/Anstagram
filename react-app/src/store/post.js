const ALL_POSTS = 'posts/ALL_POST';
const ONE_POST = 'posts/ONE_POST';
const ADD_POST = 'posts/ADD_POST';
const UPDATE_POST = 'posts/UPDATE_POST';
const DELETE_POST = 'posts/DELETE_POST';


const getPosts = (posts) => {
    return {
        type: ALL_POSTS,
        payload: posts
    }
}

const onePost = (post) => {
    return {
        type: ONE_POST,
        payload: post
    }
}

const addPost = (post) => {
    return {
        type: ADD_POST,
        payload: post
    }
}

const editPost = (post) => {
    return {
        type: UPDATE_POST,
        payload: post
    }
}

const deleteAPost = (id) => {
    return {
        type: DELETE_POST,
        payload: id
    }
}


export const getAllPosts = () => async (dispatch) => {
    const response = await fetch(`/api/posts/`);

    if (response.ok) {
        const posts = await response.json();
        dispatch(getPosts(posts));
        return response
    }
}


export const getAPost = (id) => async (dispatch) => {
    const response = await fetch(`/api/posts/${id}`)

    if (response.ok) {
        const post = await response.json();
        dispatch(onePost(post));
        return response;
    }
}


export const createPost = (formData) => async (dispatch) => {
    const response = await fetch(`/api/posts/add`, {
        method: 'POST',
        body: formData
    });

    if (response.ok) {
        const post = await response.json();
        dispatch(addPost(post));
        return response;
    }
}


export const updatePost = (data, id) => async (dispatch) => {
    const response = await fetch(`/api/posts/${id}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })


    if (response.ok) {
        const post = await response.json();
        dispatch(editPost(post));
        return post;
    }
}


export const deletePost = (id) => async (dispatch) => {
    const response = await fetch(`/api/posts/${id}/delete`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(deleteAPost(id));
    }
}



const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case ALL_POSTS:
            const getAllPosts = {};
            action.payload.posts.forEach((post) => {
                getAllPosts[post.id] = post
            });
            return getAllPosts;
        case ONE_POST:
            return {...state, [action.payload.id]: action.payload}
        case ADD_POST: {
            const newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState;
        }
        case UPDATE_POST: {
            const newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState;
        }
        case DELETE_POST: {
            const newState = { ...state }
            delete newState[action.payload];
            return newState;
        }
        default:
            return state;
    }
}

export default postsReducer;
