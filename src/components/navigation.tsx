import React from 'react';
import './navigation.scss';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className='navigation'>
      <Link to='/' className='navigation-link'>
        Info
      </Link>
      <Link to='/todo' className='navigation-link'>
        To Do
      </Link>
    </nav>
  );
}
