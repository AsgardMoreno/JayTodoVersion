import React from 'react';
import { HeaderTitle } from '../Services/setToDoHeader.jsx';
import BackButton from './BackButton';
import './Styles/categoryHeaderStyle.css';

const CategoryHeader = () => {
  return (
    <header className='categoryHeaderStyle'>
      <BackButton />
      <HeaderTitle />
    </header>
  );
}

export default CategoryHeader;