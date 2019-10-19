import { all, call, put, takeLatest } from 'redux-saga/effects';
import { onSuccess, onCurrSuccess, onError, onCurrError } from './actions';
import Axios from 'axios';

const API_KEY = "3fbb2b31fd3e77c536be64abc677a4d1"

const fetchStudent = (payload) => {
    return Axios.get(`https://api.myjson.com/bins/1dlper`)
}

function* StudentWorkerSaga({ payload }) {
    console.log("payload", payload);
    try {
        const data = yield call(fetchStudent, payload);
        console.log("success");
        yield put(onSuccess(data));
    } catch (error) {
        console.log("error");
        yield put(onError(error));
    }
}

function* studentWatcherSaga() {
    yield takeLatest("ON_SEARCH", StudentWorkerSaga);
}

export default studentWatcherSaga;
