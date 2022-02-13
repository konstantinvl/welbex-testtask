import React from 'react';
import './info.scss';

export function Info() {
  return (
    <section className='info'>
      <span>This is ToDo List</span>
      <span>
        It is made by <i>Konstantin Vlasenko</i>
      </span>
      <span>as a test task</span>
      <span>
        for <b>WelbeX</b>
      </span>
    </section>
  );
}
