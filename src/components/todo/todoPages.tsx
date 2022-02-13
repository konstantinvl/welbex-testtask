import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../services/store/hooks';
import { TodoPageCounter } from './todoPageCounter';
import './todoPages.scss';

export function TodoPages() {
  const { activePage, totalPages } = useAppSelector((state) => state.todo);
  const [showPages, setShowPages] = useState<JSX.Element[]>([]);

  function printPages(): void {
    if (totalPages) {
      const shownPages: JSX.Element[] = [];
      for (let i = -3; i < 0; i++) {
        if (activePage + i > 0) {
          shownPages.push(<TodoPageCounter page={activePage + i} key={activePage + i} />);
        }
      }
      shownPages.push(<TodoPageCounter page={activePage} key={activePage} />);
      for (let i = 1; i < 4; i++) {
        if (activePage + i <= totalPages) {
          shownPages.push(<TodoPageCounter page={activePage + i} key={activePage + i} />);
        }
      }
      setShowPages(shownPages);
    }
  }
  useEffect(printPages, [totalPages, activePage]);

  return <div className='todo-pages'>{showPages}</div>;
}
