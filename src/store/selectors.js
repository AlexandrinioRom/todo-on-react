import { createSelector } from 'reselect';

const getTodos = (state) => state.todos.tasks;
const getFilter = (state) => state.todos.filter;

export const filter = createSelector(getTodos, getFilter, (tasks, filter) => {
  switch (filter) {
    case 'Active':
      return tasks.filter(task => !task.completed)
    case 'Completed':
      return tasks.filter(task => task.completed)
    default:
      return tasks
  }
})



export * as todoSelectors from './selectors';