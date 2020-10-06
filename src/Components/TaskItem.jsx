import React from 'react';
import './Styles/taskItem.css';

const TaskItem = ({ date, name }) => {
  return (
    <div className='taskDiv'>

      <h3 className='taskContent'>
        <span className='taskInLineContent'>
          <div className='taskDate'>{date}</div>
          <span className='taskDivision'>|</span>
          <span className='taskText'>{name}</span>
        </span>
      </h3>
    </div >
  )
};

export default TaskItem;