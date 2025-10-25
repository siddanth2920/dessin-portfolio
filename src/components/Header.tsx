import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import dessinLogo from '../assets/dessinlogo.png';

const Header: React.FC = () => {
   const navigate = useNavigate();
  return (
    <header className="header">
     <div className="logo-container" onClick={() => navigate("/home")}>
        <img
          src={dessinLogo}
          alt="Dessin Logo"
          className="logo-img"
        />
        <span className="logo-text">DESSIN</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home" onClick={() => navigate('/home')}>Home</a></li>
          <li><a href="#projects" onClick={() => navigate('/projects')}>Our Projects</a></li>
          <li><a href="#about" onClick={() => navigate('/about')}>About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
