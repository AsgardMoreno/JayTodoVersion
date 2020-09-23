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
      <Link to="/categories">
        <button className="startButton" type="button">
          COMENZAR
        </button>
      </Link>
      <img className="avatarsImage" src={avatars} alt="avatars" />
    </main>
  );
};

export default StartPage;
