import React from 'react';
import TaskItem from './TaskItem';
import './Styles/toDoTaskList.css';
import { CategoryTitle } from '../Services/setToDoHeader';

const ToDoTaskList = ({ task, setTask }) => {

  return (
    <div className="toDoListItems">
      {task.filter(individualTask => individualTask.category === CategoryTitle)
        // .sort((b, a) => b.year - a.year)
        .map(individualTask =>
          <TaskItem
            setTask={setTask}
            task={task}
            thisTask={individualTask}
            year={individualTask.year}
            date={individualTask.date}
            name={individualTask.name}
            completed={individualTask.completed}
            key={individualTask.key}
          />
        )}
    </div>
  )
};

export default ToDoTaskList;