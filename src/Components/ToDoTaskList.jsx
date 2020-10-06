import React from 'react';
import { categoryTasks } from '../Services/CategoriesTaskContext';
import TaskItem from './TaskItem';
import './Styles/toDoTaskList.css';

const ToDoTaskList = () => {
  return (
    <div className="toDoListItems">
      {categoryTasks
        .map(task =>
          <TaskItem
            date={task.date}
            name={task.name}
            completed={task.completed}
          />
        )}
    </div>
  )
};

export default ToDoTaskList;
