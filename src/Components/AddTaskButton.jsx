import React from 'react';
import { addNewTaskModal } from './NewTaskModal';
import './Styles/addTaskButton.css';

const AddTaskButton = () => {
  const addButtonImage = require('../theme/images/icon-plus.png')
  return (
    <div className='addButtonDiv'>
      <button type='button' className='addButtonStyle' onClick={addNewTaskModal}>
        <img src={addButtonImage} alt='addTaskButton' />
      </button>

    </div>
  )
}
export default AddTaskButton;