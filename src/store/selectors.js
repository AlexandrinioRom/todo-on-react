import { createSelector } from 'reselect';

const getTodos = (state) => state.todos.tasks;


export const completed = createSelector(getTodos, tasks => {
  return tasks.filter(task => task.completed === true)
})

export const active = createSelector(getTodos, tasks => {
  return tasks.filter(task => task.completed === false)
})

export * as todoSelectors from './selectors';