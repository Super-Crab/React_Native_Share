'use strict';

import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/Index';

import logger from 'redux-logger';

let middlewares = [];
middlewares.push(thunkMiddleware);
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}