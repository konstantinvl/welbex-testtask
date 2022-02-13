import React from 'react';
import { useAppDispatch, useAppSelector } from '../../services/store/hooks';
import { todosSetActivePage } from '../../services/store/todo/todoActions';

export function TodoPageCounter(props: { page: number }) {
  const { page } = props;
  const { activePage } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  return (
    <div
      className={activePage === page ? 'todo-pages__page active' : 'todo-pages__page'}
      onClick={() => {
        dispatch(todosSetActivePage(page));
      }}>
      {page}
    </div>
  );
}
