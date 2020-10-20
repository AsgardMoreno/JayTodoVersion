import React from "react";
import { Link } from 'react-router-dom';
import './Styles/backButtonStyles.css';

const BackButton = (event) => {
  const backButton = require('../theme/images/back-btn.png');
  // const eventHandler = (e) => {
  //   e.preventDefault();
  //   console.log('prevDef')
  // }
  return (
    <Link
      to='/categories'
      className="linkStyle"
    >
      <button className="backButton" >
        <img src={backButton} alt='BackButton' />
      </button>
    </Link>

  )
};

export default BackButton;
