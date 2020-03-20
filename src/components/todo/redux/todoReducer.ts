import { ToDoTask } from "../../../models/todo-task-model";
import { ToDoActions } from "./todoActions";

export type ToDoState = {
    currentId: number,
    tasks: ToDoTask[]
}


export const initialState: ToDoState = { currentId: 0, tasks: [] };

export function reducer(state: ToDoState = initialState, action: { type: ToDoActions, payload: string | number }): ToDoState {
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
            return state;
    }
}