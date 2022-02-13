import { getToDos } from '../../axios/requests';
import { ToDoInterface } from '../../interfaces';
import { call, put, select } from 'redux-saga/effects';
import { todoSetInfo, todosSet } from './todoActions';
import { selectToDos } from './todoSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { POINTS_ON_PAGE } from '../../constants';

export function* todosGetRequest() {
  try {
    const todos: ToDoInterface[] = yield call(getToDos);
    if (todos.length) {
      const activePage = 1;
      const totalPages = Math.ceil(todos.length / POINTS_ON_PAGE);
      yield put(todoSetInfo({ todos, activePage, totalPages }));
    }
  } catch (e) {
    yield;
  }
}

export function* todoSetCompleted(action: PayloadAction<number>) {
  try {
    const todos: ToDoInterface[] = yield select(selectToDos);
    const newTodos = todos.map((todo) => {
      if (todo.id !== action.payload) {
        return todo;
      } else {
        return { ...todo, completed: !todo.completed };
      }
    });
    yield put(todosSet(newTodos));
  } catch (e) {
    yield;
  }
}
