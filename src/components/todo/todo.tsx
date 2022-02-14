import React from 'react';
import { useAppSelector } from '../../services/store/hooks';
import { shownPointsSelector } from '../../services/store/todo/todoSlice';
import './todo.scss';
import { TodoAdd } from './todoAdd';
import { TodoPages } from './todoPages';
import { TodoPoint } from './todoPoint';

export function ToDo() {
  const state = useAppSelector((state) => state);
  const todos = shownPointsSelector(state);

  return (
    <section className='todo'>
      <TodoAdd />
      <div className='todo-wrapper'>
        {todos.length &&
          todos.map((todo) => {
            return <TodoPoint todo={todo} key={todo.id} />;
          })}
      </div>
      <TodoPages />
    </section>
  );
}
