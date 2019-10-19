import { createStore, Middleware, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from './reducer';
// import studentWatcherSaga from './studentWatcherSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
    sagaMiddleware
)

const store = createStore(reducer, middleware);

// sagaMiddleware.run(studentWatcherSaga);

export default store;
