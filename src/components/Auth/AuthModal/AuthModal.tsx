import React from "react";
import styled from "styled-components";

const AModal = styled.div`
  border: solid 1px black;
  width: 300px;
  height: 400px;
`;

interface MProps {
  children: JSX.Element[];
}

const AuthModal = ({ children }: MProps) => {
  return (
    <>
      <AModal>{children}</AModal>
    </>
  );
};

export default AuthModal;
