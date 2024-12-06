import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Headers/BasicHeader/BasicHeader';
import './LoginPage.scss'

const Button = styled.button`
  background-color: #9A9A9A;
  color: #FFFFFF;
  border-radius: 5px;
  border: none;
  padding: 30px 0px;
  margin-top: 20px;
  width: 250px;

  font-size: 20px;

  cursor: pointer;

  &:hover {
    background-color: #bfbdbd;
  }
`;

const LoginPage = () => {
    return (
      <div className='title'>
        <Header />
        <div className="container">
          <p className='form_name'>Вход</p>
          <div className="rectangle">
            <p>Логин (Username в Telegram)</p>
            <input type="text" placeholder="Username" id="username" required />
            <p>Пароль</p>
            <input type="password" placeholder="Password" id="password" required/>
          </div>
          <Button>
            Войти
          </Button>
        </div>
      </div>
    );
};

export default LoginPage;