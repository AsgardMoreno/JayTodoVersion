import React from 'react';
import './Styles/NewTaskModal.css';
import './Styles/categoryHeaderStyle.css';
import DatePicker from './DatePicker';
import { CategoryTitle } from '../Services/setToDoHeader';

export const addNewTaskModal = () => {
  document.querySelector('.modalInput').value = '';
  document.querySelector('.mainToDo').classList.toggle('addBlur');
  document.querySelector('.modalWindow').classList.toggle('activeModalWindow');
};

const ShowNewTaskModal = ({ setTask }) => {


  const closeModal = () => {
    document.querySelector('.mainToDo').classList.toggle('addBlur');
    document.querySelector('.modalWindow').classList.toggle('activeModalWindow');
  };

  const addNewTask = (e) => {
    e.preventDefault();
    setTask(prevTask => [...prevTask, {
      key: new Date().getTime(),
      category: CategoryTitle,
      name: document.getElementById('taskToDo').value,
      completed: false,
      date: `${document.getElementById('day').value} ${document.getElementById('month').value}`,
      year: `${document.getElementById('year').value}`
    }]);
    closeModal();
  }

  return (
    <div className='modalWindow'>
      <header className='modalHeaderStyle'>
        <h1 className='modalHeaderText'>AGREGAR TAREA</h1>
      </header>
      <div className='modalAddTaskSection'>
        <form onSubmit={addNewTask}>
          <input
            autoFocus
            type='text'
            name='task'
            id='taskToDo'
            className='modalInput'
            placeholder='PENDIENTE....'
            minLength='1'
            maxLength='128'
            required
          />
          <DatePicker />
          <button type='submit' className='modalButtonAgregar'>
            AGREGAR
          </button>
        </form>
        <button
          className='modalButtonCancelar'
          onClick={closeModal}>
          CANCELAR
        </button >

      </div>



    </div>
  )
};

export default ShowNewTaskModal;