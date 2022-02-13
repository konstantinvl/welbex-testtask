import React from 'react';
import './todoPoint.scss';
import { ToDoInterface } from '../../services/interfaces';
import { useAppDispatch } from '../../services/store/hooks';
import { todoSetCompleted } from '../../services/store/todo/todoActions';
import { Checkbox } from './checkbox';

export function TodoPoint(props: { todo: ToDoInterface }) {
  const { todo } = props;
  const dispatch = useAppDispatch();

  return (
    <div
      className='todo-point'
      onClick={() => {
        dispatch(todoSetCompleted(todo.id));
      }}>
      <Checkbox checked={todo.completed} />
      <span className={todo.completed ? 'todo-point__title completed' : 'todo-point__title'}>
        {todo.title}
      </span>
    </div>
  );
}
