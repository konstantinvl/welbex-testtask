import React, { useState } from 'react';
import { useAppDispatch } from '../../services/store/hooks';
import { todoAdd } from '../../services/store/todo/todoActions';
import './todoAdd.scss';

export function TodoAdd() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useAppDispatch();
  return (
    <form
      className='todo-add'
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(todoAdd(newTodo));
        setNewTodo('');
      }}>
      <span>Add ToDo</span>
      <input
        type='text'
        className='todo-add__input'
        value={newTodo}
        required
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button type='submit' className='todo-add__submit'></button>
    </form>
  );
}
