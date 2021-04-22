import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';

const logger = ({dispatch, getState}) => (next) => (action) => {
  console.log('ACTION_TYPE = ', action.type);
  next(action);
};

const store  = createStore(rootReducer, applyMiddleware(logger));
// console.log(store);
// console.log('Before state',store.getState());
// store.dispatch({
//  type : 'ADD_MOVIES',
//  movies : [{name : 'Superman'}] 
// });
// console.log('After state',store.getState());

const thunk = ({dispatch, getState}) => (next) => (action) => {
  if(typeof action === 'function'){
    action(dispatch);
    return;
  };
  next(action);
}
ReactDOM.render(
  <React.StrictMode>
    <App store = {store} />
  </React.StrictMode>,
  document.getElementById('root')
);

