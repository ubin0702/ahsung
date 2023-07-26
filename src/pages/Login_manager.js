
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './logo1.css'; 
import './back.css';

const Login_manager = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log('아이디:', email);
    console.log('비밀번호:', password);
  };

  return (
    <div className="logo1-container">
      <img className="logo1" src="/images/logo.png" alt="Logo1" />
      <button className="back" onClick={handleGoBack}>{'<'}</button>

      <div className="login-form">
 
        <form onSubmit={handleSubmit}>
          <div>
            <label>아이디</label>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label>비밀번호</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
};

export default Login_manager;
