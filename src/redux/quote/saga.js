import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { QUOTE_GET_ITEM } from "Constants/actionTypes";

import {
  getQuoteItemSuccess,
  getQuoteItemError
} from "./actions";

import { serverConfig } from "Constants/defaultValues";
import colors  from "Data/colors.json";

const getQuoteItemRequest = async () => {
  return await new Promise((success, fail) => {
      axios.get(serverConfig.apiURL,{
        headers: {
          "X-Mashape-Key": serverConfig.apiKey //the token is a variable which holds the token
        }
      }).then( (resp) => {
        var result = resp.data[0];
        result.color = colors[Math.floor(Math.random()*colors.length)];
        success(result);
      });
  })
    .then(response => response)
    .catch(error => error);
};

function* getQuoteItem({ payload }) {
  try {
    const response = yield call(getQuoteItemRequest);
    yield put(getQuoteItemSuccess(response));
  } catch (error) {
    yield put(getQuoteItemError(error));
  }
}

export function* watchGetItem() {
  yield takeEvery(QUOTE_GET_ITEM, getQuoteItem);
}

export default function* rootSaga() {
  yield all([fork(watchGetItem)]);
}
