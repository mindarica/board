import { mockCreateTask, mockFetchLists, mockFetchTasks } from "../../../server/api/server";
import { SET_TASK_LISTS, SET_TASKS } from "../../constants/boardConstants";

export const setTasks = data => ({
  type: SET_TASKS,
  payload: data
});

export const setTaskLists = data => ({
  type: SET_TASK_LISTS,
  payload: data
});

export const fetchTasks = () => (dispatch) => {
  return mockFetchTasks()
    .then((data => dispatch(setTasks(data))))
    .catch(error => console.log(error))
}
export const fetchLists = () => (dispatch) => {
  return mockFetchLists()
    .then((data => dispatch(setTaskLists(data))))
    .catch(error => console.log(error))
}

export const createTask = (taskList) => (dispatch) => {
  return mockCreateTask(taskList)
    .then((data => dispatch(setTasks(data))))
    .catch(error => console.log(error))
}