import { TODOS_GET_REQUESTED, TODO_SET_COMPLETED } from './todo/todoActions';
import { todoSetCompleted, todosGetRequest } from './todo/todoSaga';
import { takeEvery } from 'redux-saga/effects';

function* mySaga() {
  yield takeEvery(TODOS_GET_REQUESTED, todosGetRequest);
  yield takeEvery(TODO_SET_COMPLETED, todoSetCompleted);
}

export default mySaga;
