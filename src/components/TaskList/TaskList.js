import React from "react";
import { Modal } from "../../components/Modal/Modal";
import { useInput } from "../../hooks/useInput";
import { TaskListWrapper } from "./TaskList.styles";
import { useState } from "react";

export const TaskList = ({ list, tasks, dragTask, addTask, editTask, deleteTask }) => {
  const description = useInput('');
  const [taskId, setTaskId] = useState(null);

  const toggleModal = () => {
    if (taskId) {
      setTaskId(null);
      description.setValue('');
    } else {
      setTaskId(Math.random())
    }
  };

  const handleDoubleClick = (id) => () => {
    setTaskId(id);
    description.setValue(tasks.find(item => item.id === Number(id)).description)
  }

  const createTask = (listId) => () => {
    if (tasks.find(item => item.id === taskId)) {
      editTask({ id: taskId, description: description.value, taskListId: listId })
    } else {
      addTask({ id: taskId, description: description.value, taskListId: listId });
    }
    description.setValue('');
    setTaskId(null);
  };

  const handleOnDrag = (e, id) => {
    e.dataTransfer.setData("id", id);
  }

  const handleOnDragOver = (e) => {
    e.preventDefault();
  }

  const handleOnDrop = (e) => {
    dragTask({ id: e.dataTransfer.getData("id"), taskListId: list.id });
  }

  const renderTasks = (item) => {
    return (
      <div
        className="task"
        onDoubleClick={handleDoubleClick(item.id)}
        draggable
        onDragStart={e =>
          handleOnDrag(e, item.id)
        }
        key={item.id}>
        <button onClick={() => deleteTask(item.id)}>&times;</button>
        {item.description}
      </div>
    )
  }


  return (
    <TaskListWrapper id={list.id}>
      <Modal onClose={toggleModal} open={!!taskId}>
        <h2>Task</h2>
        <input
          type="text"
          className='input'
          placeholder="description"
          value={description.value}
          onChange={description.onChange} />
        <button className='submitButton' disabled={!description.value} onClick={createTask(list.id)}>Submit</button>
      </Modal>
      <div className="column">
        <div className="header">
          <div className="title">
            <h3>{list.listName}</h3>
            <div>({tasks.length})</div>
          </div>
          <button className="button" onClick={toggleModal}>+</button>
        </div>
        <div
          className="list"
          onDragOver={handleOnDragOver}
          onDrop={handleOnDrop}
        >
          {tasks.map(renderTasks)}
        </div>
      </div>
    </TaskListWrapper>
  )

};