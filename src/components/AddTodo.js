import React, { useState } from 'react'
import { addTodo } from '../features/todo/todoSlice';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

    return (
        <div>
            <form onSubmit={addTodoHandler}>
                <input
                    type='text'
                    placeholder='Enter a todo...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit'>
                    Add New
                </button>
            </form>
        </div>
    )
}

export default AddTodo