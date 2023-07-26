
import React from 'react';
import { Link } from 'react-router-dom';
import './logo.css'; 
import './splashButton.css';
import './text-box.css';

const Splash = () => {
  
  return (
    <div className="logo-container">
      <Link to="./Login_manager">
      <img className="logo" src="/images/logo.png" alt="Logo" />
      </Link>
      <div className="text-box">
        <p className="text">아성주류발주어플</p>
      </div>
      <Link to="./Login_franchise">
      <button className="splashButton">가맹점주 로그인</button>
      </Link>
    </div>
  );
};

export default Splash;
