import React from 'react';
import './setToDoHeader.css';

let categoryTitle;

export const SetToDoHeader = (e) => {
  console.log(e.currentTarget.value)
  if (categoryTitle === '' ? e.currentTarget.preventDefault() : categoryTitle = (e.currentTarget.value));
}

export const HeaderTitle = () => {
  const headerTitle = categoryTitle;
  if (headerTitle === '' || headerTitle === undefined) {
    window.location.href = "../";
  }
  console.log(`this is the current category: ${headerTitle}`)
  return (
    <div>
      <h1 className='headerText'>{headerTitle}</h1>
    </div>
  )
}




