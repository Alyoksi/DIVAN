import React from 'react';
import styled from 'styled-components';
import Logo from '../../Logo';


const Container = styled.div`
  padding: 20px;
`;

const WhiteStrip = styled.div`
  height: 3vh;
`;


const TitleHeader = () => (
  <Container>
    <Logo />
    <WhiteStrip />
  </Container>
);

export default TitleHeader;
