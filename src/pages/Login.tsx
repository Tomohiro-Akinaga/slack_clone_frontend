import AuthButton from "../components/Auth/AuthButton/AuthButton";
import AuthForm from "../components/Auth/AuthForm/AuthForm";
import AuthModal from "../components/Auth/AuthModal/AuthModal";
import AuthModalContainer from "../components/Auth/AuthModalContainer/AuthModalContainer";

function LogIn() {
  return (
    <>
      <AuthModalContainer>
        <AuthModal>
          <AuthButton name="LogIn" onClick={() => alert("LogIn")} />
          <AuthForm value="Email" />
        </AuthModal>
      </AuthModalContainer>
    </>
  );
}

export default LogIn;
