import { ActionReducerMap } from '@ngrx/store';
import { IToDo, todoReducer } from './todo/todo.reducer';

export interface AppState {
  todo: IToDo;
}

export const reducers: ActionReducerMap<AppState> = {
  todo: todoReducer,
};
