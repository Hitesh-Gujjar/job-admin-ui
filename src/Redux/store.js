import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga'

// import rootReducer from './rootReducer.js';


// const store = configureStore(rootReducer);
// const sagaMiddleware = createSagaMiddleware();
const dummyReducer = (data=[],action) => 100
 const store = createStore(dummyReducer);

export default store