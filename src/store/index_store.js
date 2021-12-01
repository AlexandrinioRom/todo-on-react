import { combineReducers, compose, createStore } from 'redux';
import { tasksReducer } from './reducer';

const rootReducer = combineReducers({
  todos: tasksReducer
})

export const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))