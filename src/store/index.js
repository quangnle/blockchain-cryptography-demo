import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from '@redux-saga/core';

import rootSaga from './rootSaga';
import counterSlice from './slices/counterSlice';
import appSlice from './slices/appSlice';
import authSlice from './slices/authSlice';
import layoutSlice from './slices/layoutSlice';

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  counter: counterSlice,
  app: appSlice,
  auth: authSlice,
  layout: layoutSlice
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history))
});

sagaMiddleware.run(rootSaga);
