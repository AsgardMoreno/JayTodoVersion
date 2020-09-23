import React from 'react';
import './setToDoHeader.css';

let categoryTitle;

export const SetToDoHeader = (e) => {
  console.log(e.currentTarget.value)
  categoryTitle = (e.currentTarget.value);
}

export const HeaderTitle = () => {
  const headerTitle = categoryTitle;
  console.log(`this is the current category: ${headerTitle}`)
  return (
    <div>
      <h1 className='headerText'>{headerTitle}</h1>
    </div>
  )
}




