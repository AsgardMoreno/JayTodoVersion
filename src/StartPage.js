import React from 'react';

const StartPage = () => {
  const avatars = require('./theme/images/avatars.png');

  return(
    <div>
      <img src={avatars} alt="avatars" />
      <button 
      type="button">COMENZAR</button>
    </div>
  );
}

export default StartPage;