import React from 'react';
import './Styles/NewTaskModal.css';
import './Styles/categoryHeaderStyle.css';

export const addNewTaskModal = () => {
  document.querySelector('.mainToDo').classList.toggle('addBlur');
  console.log('click');
  document.querySelector('.modalWindow').classList.toggle('activeModalWindow');
};

const ShowNewTaskModal = () => {
  const closeModal = () => {
    console.log('closingModal')
    document.querySelector('.mainToDo').classList.toggle('addBlur');
    document.querySelector('.modalWindow').classList.toggle('activeModalWindow');

  }

  return (
    <div className='modalWindow'>
      <header className='modalHeaderStyle'>
        <h1 className='modalHeaderText'>AGREGAR TAREA</h1>
      </header>
      <div className='modalAddTaskSection'>
        <label for='task'> </label>
        <input type='text' name='task' className='modalInput' placeholder='TAREA'>
        </input>
        <label for='date'> </label>
        <input type='text' name='date' className='modalInput' placeholder='FECHA'>
        </input>
        <button className='modalButtonAgregar'>
          AGREGAR
        </button>
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


