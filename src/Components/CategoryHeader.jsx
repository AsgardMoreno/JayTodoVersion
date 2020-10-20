import React from 'react';
import { HeaderTitle } from '../Services/setToDoHeader.jsx';
import BackButton from './BackButton';
import './Styles/categoryHeaderStyle.css';

const CategoryHeader = ({ task }) => {
  return (
    <header className='categoryHeaderStyle'>
      <BackButton />
      <HeaderTitle task={task} />
    </header>
  );
}

export default CategoryHeader;