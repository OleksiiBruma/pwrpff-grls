import {
  takeEvery, all, call, put,
} from "redux-saga/effects";
import API from "Utils/api";
import {
  SHOW_REQUESTED,
  SHOW_RECEIVED,
  EPISODES_REQUESTED,
  EPISODES_RECEIVED,
  EPISODE_RECEIVED,
  EPISODE_REQUESTED,
  SHOW_REQUEST_FAILED,
  EPISODE_REQUEST_FAILED,
  EPISODES_REQUEST_FAILED,
} from "Redux/types";
import { showLoader, hideLoader } from "Redux/actions";
import { toast } from "Components/Toast";

function* workerRequestShow({ payload }) {
  yield put(showLoader());
  try {
    const { data } = yield call(API.get, `/shows/${payload}`);
    yield put({ type: SHOW_RECEIVED, payload: data });
  } catch (error) {
    yield put({ type: SHOW_REQUEST_FAILED });
    yield call(toast, "something went wrong :(");
  }
  yield put(hideLoader());
}
function* watchRequestShow() {
  yield takeEvery(SHOW_REQUESTED, workerRequestShow);
}

function* workerRequestEpisodes({ payload }) {
  yield put(showLoader());
  try {
    const { data } = yield call(API.get, `/shows/${payload}/episodes`);
    yield put({ type: EPISODES_RECEIVED, payload: data });
  } catch (error) {
    yield put({ type: EPISODES_REQUEST_FAILED });
    yield call(toast, "something went wrong :(");
  }
  yield put(hideLoader());
}
function* watchRequestEpisodes() {
  yield takeEvery(EPISODES_REQUESTED, workerRequestEpisodes);
}

function* workerRequestEpisode({ payload }) {
  yield put(showLoader());
  try {
    const { data } = yield call(API.get, `/episodes/${payload}`);
    yield put({ type: EPISODE_RECEIVED, payload: data });
  } catch (error) {
    yield put({ type: EPISODE_REQUEST_FAILED });
    yield call(toast, "something went wrong :(");
  }
  yield put(hideLoader());
}
function* watchRequestEpisode() {
  yield takeEvery(EPISODE_REQUESTED, workerRequestEpisode);
}

export default function* rootSaga() {
  yield all([
    watchRequestShow(),
    watchRequestEpisodes(),
    watchRequestEpisode(),
  ]);
}
