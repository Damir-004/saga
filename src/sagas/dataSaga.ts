import {apply, call, put, delay, takeEvery} from "redux-saga/effects";
import {ASYNC_LOAD_DATA, loadData, loadDataFail, loadDataSuccess} from "../store/dataReducer";

function* asyncLoadData(): any {
    try {
        yield put(loadData());
        yield delay(3000);
        const response = yield call(fetch, "https://restcountries.com/v3.1/all");
        const data = yield apply(response, response.json, []);
        yield put(loadDataSuccess(data));
    }
    catch (e: any) {
        yield put(loadDataFail(e.message));
    }
}

export function* dataWatcher() {
    yield  takeEvery(ASYNC_LOAD_DATA, asyncLoadData)
}