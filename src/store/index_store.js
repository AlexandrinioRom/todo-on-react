import { combineReducers, compose, createStore } from 'redux';
import { tasksReducer } from './reducer';

const rootReducer = combineReducers({
  todos: tasksReducer
})



const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}

export const store = createStore(rootReducer, persistedState, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

