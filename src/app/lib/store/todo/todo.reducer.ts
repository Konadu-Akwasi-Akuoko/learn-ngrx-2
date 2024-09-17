import { createReducer } from '@ngrx/store';
import { ToDoItem } from '../../classes/ToDoItem';
import { immerOn } from 'ngrx-immer/store';
import { addToDo, deleteToDo, markToDo } from './todo.actions';

export interface IToDo {
  todoItems: ToDoItem[];
}

export const initalState: IToDo = {
  todoItems: [],
};

export const todoReducer = createReducer(
  initalState,
  immerOn(addToDo, (state: IToDo, props) => {
    state.todoItems.push(props.item);
  }),
  immerOn(markToDo, (state: IToDo, props) => {
    state.todoItems = state.todoItems.map((todo) =>
      todo.id === props.id ? { ...todo, complete: !todo.complete } : todo,
    );
  }),
  immerOn(deleteToDo, (state: IToDo, props) => {
    const itemIndex = state.todoItems.findIndex((item) => item.id === props.id);
    if (itemIndex != -1) state.todoItems = state.todoItems.slice(itemIndex, 1);
  }),
);
