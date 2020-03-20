import { combineReducers } from "redux";
import { reducer as todoReducer, ToDoState } from '../components/todo/redux/todoReducer';

export type IState = {
    todo: ToDoState,
}

export default combineReducers({ todo: todoReducer });