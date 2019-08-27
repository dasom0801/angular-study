import { createAction, props } from "@ngrx/store";
import Todo from '../model/todo.model';

// export const login = createAction(
//   '[Login page] login',
//   props<{ username: string; password: string}>()
// );

export const getTodo = createAction(
  '[Todo] Get todo'
);

export const createTodo = createAction(
  '[Todo] Crate_todo',
  props<{ title:string, isCompleted:boolean }>()
);