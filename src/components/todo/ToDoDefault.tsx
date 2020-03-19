import React, { FormEvent, useReducer, useState } from "react";
import { ToDoTask } from "../../models/todo-task-model";
import './ToDo.css';


export type ToDoState = {
    currentId: number,
    tasks: ToDoTask[]
}

export enum ToDoActions {
    Add = '[ToDoActions] Add',
    Done = '[ToDoActions] Set Done',
    Remove = '[ToDoActions] Remove',
}

const initialState: ToDoState = { currentId: 0, tasks: [] };

function reducer(state: ToDoState, action: { type: ToDoActions, payload: string | number }): ToDoState {
    switch (action.type) {
        case ToDoActions.Add:
            const toDoTask = { id: state.currentId, text: action.payload } as ToDoTask;
            return { currentId: ++state.currentId, tasks: [...state.tasks, toDoTask] };
        case ToDoActions.Remove:
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case ToDoActions.Done:
            const updatedTask = state.tasks.find(task => task.id === action.payload);
            return {
                ...state, tasks: [
                    ...state.tasks.filter(task => task.id !== action.payload),
                    { ...updatedTask, done: !updatedTask?.done } as ToDoTask
                ]
            };
        default:
            throw new Error();
    }
}

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
            {state.tasks.map(task => <li className={task.done ? 'done' : 'todo'} onClick={() => setDoneStatusTask(task.id)}>
                <span>{task.text}</span>
                <button className="delete-task-button" onClick={(event) => deleteTask(event as any, task.id)}>x</button>
            </li>)}
        </ul>
    </div>;
}