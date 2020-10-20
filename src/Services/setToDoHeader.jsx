import React from 'react';
import './Styles/setToDoHeader.css';
import { ActualDate } from '../Services/GetActualDate';

export let CategoryTitle;

export const SetToDoHeader = (e) => {

  if (CategoryTitle === '' ? e.currentTarget.preventDefault()
    : CategoryTitle = (e.currentTarget.value));
}

export const HeaderTitle = ({ task }) => {
  const headerTitle = CategoryTitle;

  if (headerTitle === '' || headerTitle === undefined) {
    window.location.href = "../";
  }
  // console.log(`this is the current category: ${headerTitle}`)
  return (
    <div className='headerText'>
      <h1 ><strong> {headerTitle}</strong></h1>
      <h2 > {task.filter(individualTask => individualTask.category === CategoryTitle).length} Pendientes </h2>
      <h4>{ActualDate}</h4>
    </div>
  )
}




