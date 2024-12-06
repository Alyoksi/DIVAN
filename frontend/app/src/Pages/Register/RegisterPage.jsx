import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Headers/BasicHeader/BasicHeader';
import './RegisterPage.scss'

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

const RegisterPage = () => {
    return (
      <div className='title'>
        <Header />
        <div className="container">
          <p className='form_name'>Регистрация</p>
          <div className="rectangle">
            <p>Логин (Username в Telegram)</p>
            <input type="text" placeholder="Username" id="username" required />
            <p>Пароль</p>
            <input type="password" placeholder="Password" id="password" required/>
            <p>Подтверждение пароля</p>
            <input type="password" placeholder="Password" id="confirm_password" required/>
          </div>
          <Button>
            Создать аккаунт
          </Button>
        </div>
      </div>
    );
};

export default RegisterPage;