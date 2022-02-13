import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import mySaga from './saga';
import todo from './todo/todoSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { todo },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
