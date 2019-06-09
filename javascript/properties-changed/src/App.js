import React from 'react';
import logo from './logo.svg';
import { Posts } from './Posts';
import styled, { keyframes } from 'styled-components';

const Header = styled.header`
  text-align: center;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`;

const Img = styled.img`
  animation: infinite 20s linear;
  animation-name: ${Rotation};
  height: 40vmin;
  pointer-events: none;
`

const Container = styled.div`
  margin: 14px;
`;

function App() {
  return (
    <>
      <Header>
        <Img src={logo} alt="logo" />
      </Header>
      <Container>
        <Posts />
      </Container>
    </>
  );
}

export default App;
