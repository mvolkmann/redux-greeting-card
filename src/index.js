import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import App from './App';
import {reducer} from './reducer';

// Setup for redux-devtools
const extension = window.__REDUX_DEVTOOLS_EXTENSION__;
const enhancer = extension && extension();

const initialState = {
  occasion: 'Birthday',
  name: '',
  message: '',
  show: 'form'
};

const store = createStore(reducer, initialState, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
