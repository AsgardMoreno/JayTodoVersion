import React from "react";
import HeaderLogo from "../../Components/HeaderLogo.jsx";
import "./categories.css";
import { Link } from 'react-router-dom';
import { SetToDoHeader } from "../../Services/setToDoHeader.jsx";

const Categories = () => {
  const categoryImagesFriends = require('../../theme/images/category-friends.png');
  const categoryImagesHome = require('../../theme/images/category-home.png');
  const categoryImagesSchool = require('../../theme/images/category-school.png');
  const categoryImagesWork = require('../../theme/images/category-work.png');

  return (
    <main>
      <header className="catHeaderLogo">
        <HeaderLogo />
      </header>
      <div className="rowCategoryImagesDiv" >
        <Link to='/toDo' >
          <button type='button' className='categoryButton' value="ESCUELA" onClick={SetToDoHeader}>
            <img className='categoryImages' value="ESCUELA" src={categoryImagesSchool} alt='School' />
            ESCUELA
          </button>
        </Link>
        <Link to="/toDo">
          <button className='categoryButton' type='button' value="TRABAJO" onClick={SetToDoHeader}>
            <img className='categoryImages' src={categoryImagesWork} alt='Work' />
            TRABAJO
          </button>
        </Link>
      </div>
      <div className='rowCategoryImagesDiv'>
        <Link to='/toDo'>
          <button className='categoryButton' type='button' value="HOGAR" onClick={SetToDoHeader}>
            <img className='categoryImages' src={categoryImagesHome} alt='Home' />
            HOGAR
          </button>
        </Link>
        <Link to='/toDo'>
          <button className='categoryButton' type='button' value="AMIGOS" onClick={SetToDoHeader}>
            <img className='categoryImages' src={categoryImagesFriends} alt='Friends' />
            AMIGOS
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Categories;
