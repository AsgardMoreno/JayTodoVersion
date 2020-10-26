import React, { useEffect } from 'react';
import './Styles/taskItem.css';

//THE INDIVIDUAL TASK ITEM
const TaskItem = ({ task, setTask, date, name, year, thisTask, completed }) => {

  useEffect(() => {
    const itemsList = document.querySelectorAll('.taskDiv');
    itemsList.forEach(element => {
      console.log(element.dataset.completed)
      if (element.dataset.completed === 'true') {
        return element.classList.add('completedTask')
      }
    })
  }, [completed]);

  const completeTaskHandler = (e) => {
    e.currentTarget.classList.toggle('completedTask');
    setTask(task.map(item => {
      if (item.key === thisTask.key) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }))

    console.log(task)
  }
  return (
    <div className='taskDiv' onClick={completeTaskHandler} data-completed={completed}>
      <h3 className='taskContent'>
        <span className='taskInLineContent'>
          <div className='taskYear'>{year}</div>
          <div className='taskDate'>{date}</div>
          <span className='taskDivision'>|</span>
          <span className='taskText'>{name}</span>
        </span>
      </h3>
    </div >
  )
};

export default TaskItem;