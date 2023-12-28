import axios from "axios";
import {ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODO, GET_TODOS} from "../types";

export const getTodos = () => {
    return (dispatch) => {
        axios('https://656426d1ceac41c0761d83f4.mockapi.io/Todo-list')
            .then(({data}) => {
                console.log(data)
                dispatch({type: GET_TODOS, payload: data})
            })
    }
}

export const addTodo = (todo) => {
    return (dispatch) => {
        axios.post('https://656426d1ceac41c0761d83f4.mockapi.io/Todo-list', todo)
            .then(({data}) => {
                dispatch({type: ADD_TODO, payload: data})
            })
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        axios.delete(`https://656426d1ceac41c0761d83f4.mockapi.io/Todo-list/${id}`)
            .then(() => {
                dispatch({type: DELETE_TODO, payload: id});
            })
    }
}

export const editTodo = (todo) => {
    return (dispatch) => {
        axios.put(`https://656426d1ceac41c0761d83f4.mockapi.io/Todo-list/${todo.id}`, todo)
            .then(({data}) => {
                dispatch({type: EDIT_TODO, payload: data});
            })
    }
}
export const getTodo = (todo) => {
    return { type: GET_TODO, payload: todo };
}