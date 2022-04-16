import React from "react";
import AuthButton from "../components/Auth/AuthButton/AuthButton";

const SignUp = () => {
  return (
    <>
      <AuthButton name="SignUP" onClick={() => alert("SignUp")} />
    </>
  );
};

export default SignUp;
