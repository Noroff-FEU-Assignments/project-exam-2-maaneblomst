import LoginForm from "../../components/forms/LoginForm";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";

function Login() {
  return (
    <Container>
      <Heading size="1" content="Login" />
      <LoginForm />
    </Container>
  );
}

export default Login;
