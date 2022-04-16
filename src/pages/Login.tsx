import AuthButton from "../components/Auth/AuthButton/AuthButton";

function LogIn() {
  return (
    <>
      <AuthButton name="LogIn" onClick={() => alert("LogIn")} />
    </>
  );
}

export default LogIn;
