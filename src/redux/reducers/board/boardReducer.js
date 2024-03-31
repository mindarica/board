import {
  SET_TASKS,
  SET_TASK_LISTS,
} from '../../constants/boardConstants';
import { combineReducers } from 'redux';

export const tasks = (state = [], action) => {
  switch (action.type) {
    case SET_TASKS:
      return action.payload;
    default:
      return state;
  }
};


export const taskLists = (state = [], action) => {
  switch (action.type) {
    case SET_TASK_LISTS:
      return action.payload;
    default:
      return state;
  }
};





const boardReducer = combineReducers({ taskLists, tasks });

export default boardReducer;