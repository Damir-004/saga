import {all} from "redux-saga/effects";
import {dataWatcher} from "./dataSaga";

export function* rootWatcher() {
    yield all([dataWatcher()])
}

