import React from 'react';
import Header from '../../components/Headers/BasicHeader/BasicHeader';
import './LoginPage.scss'

const LoginPage = () => {
    return (
      <div className='title'>
        <Header />
        <div className="container">
          <p className='form_name'>Вход</p>
          <div className="rectangle">
            <p>Логин(Username в Telegram)</p>
            <input type="text" placeholder="Username" id="username" required />
            <p>Пароль</p>
            <input type="password" placeholder="Password" id="password" required/>
          </div>
        </div>
      </div>
    );
};

export default LoginPage;