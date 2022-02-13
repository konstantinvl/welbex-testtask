import React, { useEffect } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Info } from './components/info/info';
import { ToDo } from './components/todo/todo';
import { useAppDispatch } from './services/store/hooks';
import { todosGetRequested } from './services/store/todo/todoActions';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(todosGetRequested());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='app'>
      <Navigation />
      <main className='app-main'>
        <Routes>
          <Route path='/' element={<Info />} />
          <Route path='/todo' element={<ToDo />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
