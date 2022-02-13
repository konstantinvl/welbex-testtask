import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { POINTS_ON_PAGE } from '../../constants';
import { ToDoInterface, ToDoState } from '../../interfaces';
import type { RootState } from '../store';

const initialState: ToDoState = {
  todos: [],
  activePage: 0,
  totalPages: 0,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<ToDoInterface[]>) => {
      return { ...state, todos: action.payload };
    },
    setTodosInfo: (state, action: PayloadAction<ToDoState>) => {
      return { ...action.payload };
    },
    setActivePage: (state, action: PayloadAction<number>) => {
      return { ...state, activePage: action.payload };
    },
  },
});

export const selectToDos = (state: RootState) => state.todo.todos;
export const selectToDoSlice = (state: RootState) => state.todo;
export const shownPointsSelector = createSelector(selectToDoSlice, (state) => {
  const { todos, activePage } = state;
  const startNum = (activePage - 1) * POINTS_ON_PAGE;
  const show = todos.slice(startNum, startNum + POINTS_ON_PAGE);
  return show;
});

export default todoSlice.reducer;
