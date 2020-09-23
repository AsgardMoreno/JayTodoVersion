import React from "react";
import { Link } from 'react-router-dom';
import './Styles/backButtonStyles.css';

const BackButton = () => {
  const backButton = require('../theme/images/back-btn.png');
  return (
    <Link
      to='/categories'
      className="linkStyle"
    >
      <button className="backButton">
        <img src={backButton} alt='BackButton' />
      </button>
    </Link>

  )
};

export default BackButton;
