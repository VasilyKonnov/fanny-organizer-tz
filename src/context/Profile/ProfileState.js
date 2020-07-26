import React, { useReducer } from "react";
import { ProfileContext } from "./profileContext"
import { profileReducer } from "./profileReducer"
import { LOAD_USER, LOAD_TODOS, DELETE_TODO, SET_LOADING, UPDATE_TODO, ADD_TODO } from '../types'



const options = (body = {}) => ({
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body)
})

export const ProfileState = ({ children }) => {

    const initialState = {
        todos: [],
        user: null,
        loading: true
    }

    const [state, dispatch] = useReducer(profileReducer, initialState);




    const deleteTodo = async (id) => {
        console.log("initial state", state.todos)
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'DELETE',
            })
            let payload = await response.json();

            dispatch({
                type: DELETE_TODO,
                payload,
                id
            })
        }
        catch (error) {
            console.error(error);
        }
    }

    const fetchUser = async (id) => {
        setLoading();
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            let payload = await response.json();
            dispatch({
                type: LOAD_USER,
                payload
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    const updateTodo = async (body) => {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${body.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id: body.id,
                    title: body.title,
                    complited: body.complited,
                    userId: body.userId
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            let payload = await response.json();

            console.log(payload)

            dispatch({
                type: UPDATE_TODO,
                payload
            })
        }
        catch (error) {
            console.error(error);
        }
    }

    const fetchTodos = async (id) => {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
            response = await response.json();
            dispatch({
                type: LOAD_TODOS,
                payload: response
            })
        }
        catch (error) {
            console.error(error);

        }
    }

    const addTodo = async (body) => {
        const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
                method: 'POST',
                ...options(body),
            })
            let payload = await response.json();
            dispatch({
                type: ADD_TODO,
                payload: { ...payload, id }
            })
        }
        catch (error) {
            console.error(error);
        }
    }


    const setLoading = () => dispatch({ type: SET_LOADING });
    const { user, loading, todos } = state;

    return (
        <ProfileContext.Provider value={{ updateTodo, deleteTodo, fetchUser, fetchTodos, addTodo, user, todos, loading }}>
            {children}
        </ProfileContext.Provider>
    )
}
