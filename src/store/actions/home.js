import { FETCH_USERS_SUCCESS, FETCH_USERS_START, FETCH_USERS_ERROR } from "./actionTypes";

export function fetchUsers() {
    return async dispatch => {
        try {
            dispatch(fetchUsersStart());
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const usersData = await response.json();
            dispatch(fetchUsersSuccess(usersData))
        } catch (error) {
            fetchUsersError(error)
        }
    }
}

export function fetchUsersStart() {
    return {
        type: FETCH_USERS_START
    }
}
export function fetchUsersSuccess(usersData) {
    return {
        type: FETCH_USERS_SUCCESS,
        users: usersData
    }
}
export function fetchUsersError(error) {
    return {
        type: FETCH_USERS_ERROR,
        error
    }
}