import { createStore } from "redux";
// import logger from "redux-logger";
// import { composeWithDevTools } from '@redux-devtools/extension';
// import { applyMiddleware } from "redux";
import reducers from './reducers/index';


const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store