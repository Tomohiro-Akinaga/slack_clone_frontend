import React from "react";
import styled from "styled-components";

const AModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

interface MCProps {
  children: JSX.Element;
}

const AuthModalContainer = ({ children }: MCProps) => {
  return (
    <>
      <AModalContainer>{children}</AModalContainer>
    </>
  );
};

export default AuthModalContainer;
