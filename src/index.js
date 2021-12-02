import './index.css';
import App from './App';
import React from 'react';
import { store } from './store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})