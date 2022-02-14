import { PayloadAction, Action } from '@reduxjs/toolkit';
import { ToDoInterface, ToDoState } from '../../interfaces';

export const TODOS_SET = 'todo/setTodos';
export const TODOS_SET_INFO = 'todo/setTodosInfo';
export const TODO_SET_COMPLETED = 'todo/setCompleted';
export const TODOS_GET_REQUESTED = 'todo/get_requested';
export const TODOS_SET_ACTIVE_PAGE = 'todo/setActivePage';
export const TODO_ADD = 'todo/addTodo';
export const TODO_CHANGE = 'todo/changeTodo';
export const TODO_DELETE = 'todo/deleteTodo';

export function todosSet(todos: ToDoInterface[]): PayloadAction<ToDoInterface[]> {
  return { type: TODOS_SET, payload: todos };
}

export function todosSetInfo(todo: ToDoState): PayloadAction<ToDoState> {
  return { type: TODOS_SET_INFO, payload: todo };
}

export function todoSetCompleted(id: number): PayloadAction<number> {
  return { type: TODO_SET_COMPLETED, payload: id };
}

export function todosGetRequested(): Action {
  return { type: TODOS_GET_REQUESTED };
}

export function todosSetActivePage(page: number): PayloadAction<number> {
  return { type: TODOS_SET_ACTIVE_PAGE, payload: page };
}

export function todoAdd(title: string): PayloadAction<string> {
  return { type: TODO_ADD, payload: title };
}

export function todoChange(
  newTitle: string,
  id: number
): PayloadAction<{ newTitle: string; id: number }> {
  return { type: TODO_CHANGE, payload: { newTitle, id } };
}

export function todoDelete(id: number): PayloadAction<number> {
  return { type: TODO_DELETE, payload: id };
}
