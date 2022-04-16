import React from "react";
import styled from "styled-components";

const AButton = styled.button`
  background-color: lightblue;
  border: none;
`;

interface IProps {
  name: string;
  onClick: () => void;
}

const AuthButton = ({ name, onClick }: IProps) => {
  return (
    <>
      <AButton onClick={onClick}>{name}</AButton>
    </>
  );
};

export default AuthButton;
