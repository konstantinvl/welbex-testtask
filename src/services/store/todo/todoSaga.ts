import { getToDos } from '../../axios/requests';
import { ToDoInterface } from '../../interfaces';
import { call, put, select } from 'redux-saga/effects';
import { todosSetInfo, todosSet } from './todoActions';
import { selectToDos } from './todoSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { POINTS_ON_PAGE } from '../../constants';

export function* todosGetRequest() {
  try {
    const todos: ToDoInterface[] = yield call(getToDos);
    if (todos.length) {
      const activePage = 1;
      const totalPages = Math.ceil(todos.length / POINTS_ON_PAGE);
      yield put(todosSetInfo({ todos, activePage, totalPages }));
    }
  } catch (e) {
    yield;
  }
}

export function* todoSetCompleted(action: PayloadAction<number>) {
  const todos: ToDoInterface[] = yield select(selectToDos);
  const newTodos = todos.map((todo) => {
    if (todo.id !== action.payload) {
      return todo;
    } else {
      return { ...todo, completed: !todo.completed };
    }
  });
  yield put(todosSet(newTodos));
}

export function* todoAdd(action: PayloadAction<string>) {
  const todos: ToDoInterface[] = yield select(selectToDos);
  let maxId = 0;
  todos.forEach((todo) => {
    if (todo.id > maxId) {
      maxId = todo.id;
    }
  });
  const newTodo: ToDoInterface = {
    userId: 1,
    id: maxId + 1,
    title: action.payload,
    completed: false,
  };
  yield put(todosSet([newTodo, ...todos]));
}

export function* todoChange(action: PayloadAction<{ newTitle: string; id: number }>) {
  const { newTitle, id } = action.payload;
  const todos: ToDoInterface[] = yield select(selectToDos);
  const newTodos = todos.map((todo) => {
    if (todo.id !== id) {
      return todo;
    } else {
      return { ...todo, title: newTitle };
    }
  });
  yield put(todosSet(newTodos));
}

export function* todoDelete(action: PayloadAction<number>) {
  const todos: ToDoInterface[] = yield select(selectToDos);

  const index = todos.findIndex((todo) => todo.id === action.payload);

  const newTodos: ToDoInterface[] = [];

  todos.forEach((todo, ind) => {
    if (ind !== index) {
      newTodos.push(todo);
    }
  });

  yield put(todosSet(newTodos));
}
