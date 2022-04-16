import React from "react";
import styled from "styled-components";

const AForm = styled.input`
  background-color: lightgray;
  border: none;
`;

interface FProps {
  value: string;
}

const AuthForm = ({ value }: FProps) => {
  return (
    <>
      <AForm type="text" value={value} />
    </>
  );
};

export default AuthForm;
