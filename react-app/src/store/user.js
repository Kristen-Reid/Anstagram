const ALL_USERS = 'posts/ALL_POST';
const ONE_USER = 'posts/ONE_POST';

const getUsers = (users) => {
    return {
        type: ALL_USERS,
        payload: users
    }
}

const oneUser = (user) => {
    return {
        type: ONE_USER,
        payload: user
    }
}


export const getAllUsers = () => async (dispatch) => {
    const response = await fetch(`/api/users/`);

    if (response.ok) {
        const users = await response.json();
        dispatch(getUsers(users));
        return response
    }
}


export const getAUser = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}`)

    if (response.ok) {
        const user = await response.json();
        dispatch(oneUser(user));
        return response;
    }
}


const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case ALL_USERS:
            const getAllUsers = {};
            action.payload.users?.forEach((user) => {
                getAllUsers[user?.id] = user
            });
            return getAllUsers;
        case ONE_USER:
            return {...state, [action.payload.id]: action.payload}
        default:
            return state;
    }
}

export default usersReducer;
