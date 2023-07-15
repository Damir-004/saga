import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import {rootWatcher} from "../sagas";
import dataReducer from "./dataReducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    dataReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootWatcher);


export type RootState = ReturnType<typeof rootReducer>
