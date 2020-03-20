import React, { FormEvent, useState } from "react";
import { connect } from "react-redux";
import { ToDoTask } from "../../models/todo-task-model";
import { IState } from "../../redux/reducers";
import { ToDoActions } from "./redux/todoActions";
import './ToDo.css';


export const ToDoRedux = (props: { tasks: ToDoTask[], addTask: (text: string) => void, removeTask: (id: number) => void, setDone: (id: number) => void, }) => {

    const [newTaskText, setNewTaskText] = useState('');

    const newTask = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.addTask(newTaskText);
        setNewTaskText('');
    }

    const deleteTask = (event: MouseEvent, id: number) => {
        event.stopPropagation();
        props.removeTask(id);
    }
    const setDoneStatusTask = (id: number) => {
        props.setDone(id);
    }

    return <div className="todo-container">
        <h1>To Do Redux</h1>
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
            {props.tasks.map((task: ToDoTask) =>
                <li key={task.id} className={task.done ? 'done' : 'todo'} onClick={() => setDoneStatusTask(task.id)}>
                    <span>{task.text}</span>
                    <button className="delete-task-button" onClick={(event) => deleteTask(event as any, task.id)}>x</button>
                </li>)}
        </ul>
    </div>;
}

const mapDispatchToProps = (dispatch: any) => ({
    setDone: (id: number) => dispatch({ type: ToDoActions.Done, payload: id }),
    addTask: (text: string) => dispatch({ type: ToDoActions.Add, payload: text }),
    removeTask: (id: number) => dispatch({ type: ToDoActions.Remove, payload: id }),
})

export default connect(
    (state: IState) => ({ tasks: state.todo.tasks }),
    mapDispatchToProps
)(ToDoRedux)