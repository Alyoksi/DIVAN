import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #dfdfdf;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border-radius: 8px;
  border: none;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const WhiteStrip = styled.div`
  background-color: white;
  height: 50px;
`;

const LoginButton = ({ text }) => (
  <Button>{text}</Button>
);

const Header = () => (
  <Container>
    <WhiteStrip />
    <ButtonContainer>
      <LoginButton text="Войти" />
      <LoginButton text="Зарегистрироваться" />
    </ButtonContainer>
  </Container>
);

export default Header;
