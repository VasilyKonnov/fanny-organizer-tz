import { LOAD_TODOS, LOAD_USER, DELETE_TODO, SET_LOADING, UPDATE_TODO, ADD_TODO } from '../types';

const handlers = {
    [LOAD_USER]: (state, { payload }) => ({ ...state, user: payload, loading: false }),
    [LOAD_TODOS]: (state, { payload }) => ({ ...state, todos: payload, loadingTodos: false }),
    [SET_LOADING]: state => ({ ...state, loading: true }),
    [UPDATE_TODO]: (state, { payload }) => {
        let todos = state.todos;
        const { id } = payload;
        const index = todos.findIndex((t) => t.id === id);
        todos[index] = payload;
        return { ...state, todos };
    },
    [DELETE_TODO]: (state, { id }) => {
        let todos = state.todos;
        const index = todos.findIndex((todo) => todo.id === id);
        if (index !== -1)
            todos = todos.splice(index, 1);
        return { ...state, todos };
    },
    [ADD_TODO]: (state, { payload }) => {
        console.log(state.todos);
        console.log(payload.id);
        console.log(payload);

        return { ...state, todos: [payload, ...state.todos] }
    },
    DEFAULT: state => state
}

export const profileReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}