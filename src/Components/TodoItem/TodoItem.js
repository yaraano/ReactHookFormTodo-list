import React, {useState} from 'react';
import {deleteTodo, editTodo, getTodo} from "../../redux/action/todoAction";
import {useDispatch, useSelector} from 'react-redux';


const TodoItem = ({el}) => {
    const dispatch = useDispatch()
    const [edit , setEdit] = useState({})
    const todoReducer = useSelector((s) => s.todo)

    const handleDelete = () => {
        dispatch(deleteTodo(el.id))
    }

    const handleEdit = () => {
        dispatch(getTodo(el)); // Установите задание для редактирования в состояние
        setEdit(el); // Установите целый объект задания в качестве состояния редактирования
    }

    const handleSave = () => {
        dispatch(editTodo(edit))
        setEdit({})
    }

    return (
        <div>
            <div style={{ display: 'flex', gap: '15px', alignItems: "center" }}>
                {
                    (edit.id && edit.id === el.id) ?  // Исправлено с todoReducer на el
                        <input
                            type="text"
                            value={edit.title || ''}
                            onChange={(e) => setEdit({ ...edit, title: e.target.value })}
                        />
                        : <h3>{el.title}</h3>
                }
                <input type="checkbox" />
                <button onClick={handleDelete}>Delete</button>
                <button onClick={(edit.id && edit.id === el.id) ? handleSave : handleEdit}>
                    {(edit.id && edit.id === el.id) ? 'Save' : 'Edit'}
                </button>
            </div>
        </div>
    );
};

export default TodoItem;