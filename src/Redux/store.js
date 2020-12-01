import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "Redux/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "Redux/sagas";

const saga = createSagaMiddleware();
const middleware = [saga];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);
saga.run(rootSaga);
export default store;
