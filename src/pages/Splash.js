
import React from 'react';
import { Link } from 'react-router-dom';
import './logo.css'; 
import './splashButton.css';
import './text-box.css';

const Splash = () => {
  
  return (
    <div className="logo-container">
      <img className="logo" src="/images/logo.png" alt="Logo" />
      <div className="text-box">
        <p className="text">아성주류발주어플</p>
      </div>
      <Link to="./Page1">
      <button className="splashButton">가맹점주 로그인</button>
      </Link>
    </div>
  );
};

export default Splash;
