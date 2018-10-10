// import { createStore, applyMiddleware } from 'redux';
import { createStore, applyMiddleware } from './Redux';
// import thunk from 'redux-thunk';
import thunk from './middleware/Thunk';
import reducer from './Reducer.js';
import logger from './middleware/Logger';

const initValues = {
    'First': 0,
    'Second': 1,
    'Third': 2
}

/**
 * reducer: 更新状态的reducer, state
 * initValues: 状态初始值
 */
const store = createStore(reducer, initValues, applyMiddleware(logger,thunk))

export default store;