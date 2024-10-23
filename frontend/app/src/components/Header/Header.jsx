import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: #d9d9d9;
  color: #292929;
  border-radius: 5px;
  border: none;
  padding: 10px 10px;

  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: #bfbdbd;
  }
`;

const WhiteStrip = styled.div`
  height: 3vh;
`;

const LoginButton = ({ text }) => (
  <Button>{text}</Button>
);

const Header = () => (
  <Container>
    <Logo />
    <WhiteStrip />
    <ButtonContainer>
      <LoginButton text="Войти" />
      <LoginButton text="Зарегистрироваться" />
    </ButtonContainer>
  </Container>
);

export default Header;