import AuthButton from "../components/Auth/AuthButton/AuthButton";
import AuthForm from "../components/Auth/AuthForm/AuthForm";

function LogIn() {
  return (
    <>
      <AuthButton name="LogIn" onClick={() => alert("LogIn")} />
      <AuthForm value="Email" />
    </>
  );
}

export default LogIn;
