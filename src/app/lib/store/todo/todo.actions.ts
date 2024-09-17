import { createAction, props } from '@ngrx/store';
import { ToDoItem } from '../../classes/ToDoItem';

export const addToDo = createAction('[ToDo] Add', props<{ item: ToDoItem }>());

export const markToDo = createAction('[ToDo] Mark', props<{ id: number }>());

export const deleteToDo = createAction(
  '[ToDo] Delete',
  props<{ id: number }>(),
);
