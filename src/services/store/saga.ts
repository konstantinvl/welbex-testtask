import {
  TODOS_GET_REQUESTED,
  TODO_ADD,
  TODO_CHANGE,
  TODO_DELETE,
  TODO_SET_COMPLETED,
} from './todo/todoActions';
import {
  todoAdd,
  todoChange,
  todoDelete,
  todoSetCompleted,
  todosGetRequest,
} from './todo/todoSaga';
import { takeEvery } from 'redux-saga/effects';

function* mySaga() {
  yield takeEvery(TODOS_GET_REQUESTED, todosGetRequest);
  yield takeEvery(TODO_SET_COMPLETED, todoSetCompleted);
  yield takeEvery(TODO_ADD, todoAdd);
  yield takeEvery(TODO_CHANGE, todoChange);
  yield takeEvery(TODO_DELETE, todoDelete);
}

export default mySaga;
