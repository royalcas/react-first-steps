import React, { FormEvent, useReducer, useState } from "react";
import { ToDoActions } from "./redux/todoActions";
import { initialState, reducer } from './redux/todoReducer';
import './ToDo.css';


export const ToDoDefault = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTaskText, setNewTaskText] = useState('');

    const newTask = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch({ type: ToDoActions.Add, payload: newTaskText });
        setNewTaskText('');
    }

    const deleteTask = (event: MouseEvent, id: number) => {
        event.stopPropagation();
        dispatch({ type: ToDoActions.Remove, payload: id });
    }
    const setDoneStatusTask = (id: number) => {
        dispatch({ type: ToDoActions.Done, payload: id });
    }

    return <div className="todo-container">
        <h1>To Do App</h1>
        <div className="todo-add-container">
            <form onSubmit={(event) => newTask(event)}>
                <input
                    type="text"
                    name="newTaskText"
                    placeholder="Add New Task"
                    value={newTaskText}
                    onChange={({ target: { value } }) => setNewTaskText(value)}
                    required />
                <button type="submit">Add</button>
            </form>
        </div>
        <ul className="todo-list">
            {state.tasks.map(task =>
                <li key={task.id} className={task.done ? 'done' : 'todo'} onClick={() => setDoneStatusTask(task.id)}>
                    <span>{task.text}</span>
                    <button className="delete-task-button" onClick={(event) => deleteTask(event as any, task.id)}>x</button>
                </li>)}
        </ul>
    </div>;
}