import React from 'react';
import './info.scss';
import Logo from '../../assets/to-do-list.png';

export function Info() {
  return (
    <section className='info'>
      <img src={Logo} alt='logo' className='info__logo' />
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
