import { all } from 'redux-saga/effects';
import quoteSagas from './quote/saga';

export default function* rootSaga(getState) {
  yield all([
    quoteSagas()
  ]);
}
