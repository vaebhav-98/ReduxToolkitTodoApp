import React from 'react'
import { removeTodo } from "../features/todo/todoSlice";
import { useSelector, useDispatch } from 'react-redux';

const Todo = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>todos</h1>
            {
                todos.map((todo) => (
                    <div key={todo.id}>
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Todo