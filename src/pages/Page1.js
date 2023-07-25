// Page1.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './logo1.css'; 
import './back.css';

const Page1 = () => {
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
    // 여기서 로그인 처리를 수행하거나 다른 로직을 추가할 수 있습니다.
    console.log('이메일:', email);
    console.log('비밀번호:', password);
  };

  return (
    <div className="logo1-container">
      <img className="logo1" src="/images/logo.png" alt="Logo1" />
      <button className="back" onClick={handleGoBack}>{'<'}</button>

      <div className="login-form">
 
        <form onSubmit={handleSubmit}>
          <div>
            <label>가맹점 코드</label>
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

export default Page1;
