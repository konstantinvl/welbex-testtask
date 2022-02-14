import React, { useEffect, useRef, useState } from 'react';
import './todoPoint.scss';
import { ToDoInterface } from '../../services/interfaces';
import { useAppDispatch } from '../../services/store/hooks';
import { todoChange, todoDelete, todoSetCompleted } from '../../services/store/todo/todoActions';
import { Checkbox } from './checkbox';

export function TodoPoint(props: { todo: ToDoInterface }) {
  const { todo } = props;
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLTextAreaElement>();

  function countHeight() {
    if (ref.current) {
      return `${ref.current.scrollHeight}px`;
    }
    return 'unset';
  }

  const [height, setHeight] = useState(countHeight());

  useEffect(() => {
    setHeight(countHeight());
  }, [todo]);

  return (
    <div className='todo-point'>
      <Checkbox
        checked={todo.completed}
        onClick={() => {
          dispatch(todoSetCompleted(todo.id));
        }}
      />
      <textarea
        className={todo.completed ? 'todo-point__title completed' : 'todo-point__title'}
        value={todo.title}
        ref={ref as React.MutableRefObject<HTMLTextAreaElement>}
        style={{ minHeight: height, maxHeight: height }}
        onChange={(e) => {
          dispatch(todoChange(e.target.value, todo.id));
        }}
        onClick={() => {
          console.log(ref.current?.scrollHeight);
        }}
      />
      <div
        className='todo-point__delete'
        onClick={() => {
          dispatch(todoDelete(todo.id));
        }}
      />
    </div>
  );
}
