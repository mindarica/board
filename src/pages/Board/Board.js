import React from "react";
import { useSelector } from "react-redux";

import { TaskList } from "../../components/TaskList/TaskList";
import { createTask, fetchLists, fetchTasks } from "../../redux/actions/board/boardAction";
import { taskListsSelector, tasksSelector } from "../../redux/selectors/board/boardSelector";
import { useDispatch } from "react-redux";
import { BordWrapper } from "./Bord.style";
import { useEffect } from "react";

export const Board = () => {
   const taskLists = useSelector(taskListsSelector);
   const tasks = useSelector(tasksSelector);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchTasks());
      dispatch(fetchLists());
   }, [dispatch]);

   const dragTask = ({ id, taskListId }) => {
      const task = tasks.find(item => item.id === Number(id));
      if (task.taskListId !== taskListId) {
         editTask({ ...task, taskListId });
      }
   }

   const addTask = (task) => {
      dispatch(createTask([...tasks, task]))
   }
   const editTask = (task) => {
      dispatch(createTask([...tasks.filter(item => item.id !== task.id), task]));
   }
   const deleteTask = (id) => {
      dispatch(createTask(tasks.filter(item => item.id !== id)));
   }

   const renderTaskList = (list) => {
      return (
         <TaskList
            key={list.id}
            list={list}
            tasks={tasks.filter(task => task.taskListId === list.id)}
            addTask={addTask}
            editTask={editTask}
            deleteTask={deleteTask}
            dragTask={dragTask}
         />)
   }

   return (
      <BordWrapper>
         {taskLists.map(renderTaskList)}
      </BordWrapper>
   )


};