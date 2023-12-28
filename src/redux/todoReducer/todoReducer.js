import {ADD_TODO, GET_TODOS, DELETE_TODO, EDIT_TODO, GET_TODO} from "../types";

const initialState = {
    todos: [],
    todo: {}
};
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {...state, todos: action.payload};
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]};
        case DELETE_TODO:
            return {...state, todos: state.todos.filter((todo) => todo.id !== action.payload)};
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? action.payload : todo
                ),
                todo: {}
            };
        case GET_TODO:
            return {...state, todo: action.payload};
        default:
            return state;
    }
};