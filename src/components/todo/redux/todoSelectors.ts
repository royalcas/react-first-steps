import { createSelector } from 'reselect';
import { IState } from "../../../redux/reducers";

export const todoStateSelector = (state: IState) => state.todo;

export const todoTasksSelector = createSelector(todoStateSelector, todoState => todoState.tasks);
