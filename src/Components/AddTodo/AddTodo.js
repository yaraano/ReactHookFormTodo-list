import React, {useState} from 'react';
import {addTodo} from "../../redux/action/todoAction";
import {useDispatch} from "react-redux";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('');

    const handleAdd = () => {
        const obj = {
            title: newTodo,
            completed: false, createdAt: +new Date(),
            completedAt: null,
        };
        setNewTodo('');
        dispatch(addTodo(obj));
    };

    return (
        <div>
            <input type="text"
                   value={newTodo}
                   onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AddTodo;