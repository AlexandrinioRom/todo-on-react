import { CREATE_TASK, DELETE_TASK, EDIT_TASK, COMPLETED_TASK, FILTERED_TASKS } from "./types";

export function createTask(value) {
  return {
    type: CREATE_TASK,
    payload: value
  }
}

export function deleteTask(taskId) {
  return {
    type: DELETE_TASK,
    payload: taskId
  }
}

export function editTask(taskId, value) {
  return {
    type: EDIT_TASK,
    payload: [taskId, value]
  }
}

export function completedTask(taskId) {
  return {
    type: COMPLETED_TASK,
    payload: taskId
  }
}

export function filteredTasks(filterId) {
  return {
    type: FILTERED_TASKS,
    payload: filterId
  }
}