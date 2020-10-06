import React from 'react';
import './Styles/setToDoHeader.css';
import { ActualDate } from '../Services/GetActualDate';
import { categoryTasks } from './CategoriesTaskContext';

export let CategoryTitle;

export const SetToDoHeader = (e) => {
  // console.log(e.currentTarget.value)
  if (CategoryTitle === '' ? e.currentTarget.preventDefault()
    : CategoryTitle = (e.currentTarget.value));
}

export const HeaderTitle = () => {
  const headerTitle = CategoryTitle;

  if (headerTitle === '' || headerTitle === undefined) {
    window.location.href = "../";
  }
  // console.log(`this is the current category: ${headerTitle}`)
  return (
    <div className='headerText'>
      <h1 ><strong> {headerTitle}</strong></h1>
      <h2 > {categoryTasks.length} Pendientes </h2>
      <h4>{ActualDate}</h4>
    </div>
  )
}




