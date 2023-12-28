import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, getTodos, deleteTodo, editTodo} from './redux/action/todoAction';
import {EDIT_TODO} from "./redux/types";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoItem from "./Components/TodoItem/TodoItem";
import {useForm} from "react-hook-form";
import {addUser} from "./redux/action/userAction";

const App = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm()

    const dispatch = useDispatch();
    // const todos = useSelector((s) => s.todos);
    // useEffect(() => {
    //     dispatch(getTodos());
    // }, []);

    const onSubmit = (data) => {
        dispatch(addUser(data));
        reset();
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center'}}>
                    <input
                        {...register("firstName", {required: true, minLength: 3, maxLength: 12})}
                    />
                    {errors.firstName?.type === "required" &&
                        <p role="alert">First name is required</p>
                    }
                    <input
                        type="text"
                        placeholder={'Last Name'}
                        {...register("lastName", {required: true, minLength: 3, maxLength: 12})}
                    />
                    {errors.lastName && <p role={'alert'}>Last name must be at least 3 characters</p>}

                    <input
                        type="email"
                        placeholder={'Email'}
                        {...register("Email", {required: 'Email address is required'})}
                    />
                    {errors.Email && <p>{errors.Email.message}</p>}
                    <input
                        type="text"
                        placeholder={'Country'}
                        {...register("Country")}
                    />

                    <button type={'submit'}>Save</button>
                </div>
            </form>


            {/*<AddTodo/>*/}
            {/*{*/}
            {/*    todos.map(todo => (*/}
            {/*        <TodoItem key={todo.id} el={todo}/>*/}
            {/*    ))*/}
            {/*}*/}
        </div>
    );
};

export default App;