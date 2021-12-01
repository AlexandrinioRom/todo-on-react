import { CREATE_TASK, DELETE_TASK, EDIT_TASK, COMPLETED_TASK } from "./types";

const initialState = {
  tasks: [],
  filter: ''
}

function nextTodoId() {
  return String(new Date().getTime())
}

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            completed: false,
            id: nextTodoId(),
            value: action.payload
          }]
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id !== action.payload[0]) {
            return task
          }
          return {
            ...task,
            value: task.value = action.payload[1]
          }
        })
      }

    case COMPLETED_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id !== action.payload) {
            return task
          }
          return {
            ...task,
            completed: !task.completed
          }
        })
      }
    default: return state
  }
}


