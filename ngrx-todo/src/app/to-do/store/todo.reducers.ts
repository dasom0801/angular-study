import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.action';
import Todo from '../model/todo.model';

export interface TodoState {
  Loading: boolean;
  Loaded: boolean;
  TodoList: Todo[];
};

export const initialState: TodoState = {
    TodoList: [],
    Loading: false,
    Loaded: true
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.getTodo, state => ({...state})),
  on(TodoActions.createTodo, (state, {title, isCompleted}) => ({...state, TodoList: [...state.TodoList, {title, isCompleted}]}))
);

export function reducer(state: TodoState | undefined, action: Action) {
  return todoReducer(state, action);
}