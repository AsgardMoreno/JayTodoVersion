import React from "react";
import "./startPage.css";
import { Link } from "react-router-dom";
import HeaderLogo from "../../Components/HeaderLogo.jsx";

const StartPage = () => {
  const headerClassName = "startHeaderLogo";
  const avatars = require("../../theme/images/avatars.png");
  return (
    <main>
      <header className={headerClassName}>
        <HeaderLogo />
      </header>
      <div className='buttonDiv'>
        <Link to="/categories">
          <button className="startButton" type="button">
            COMENZAR
        </button>
        </Link>
      </div>
      <div className='imageDiv'>
        <picture>
          <img className="avatarsImage" src={avatars} alt="avatars" />
        </picture>
      </div>
    </main>
  );
};

export default StartPage;
