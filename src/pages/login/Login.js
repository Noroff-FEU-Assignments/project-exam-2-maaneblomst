import LoginForm from "../../components/forms/LoginForm";
import { Link } from "react-router-dom";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function Login() {
  return (
    <Container>
      <Heading size="1" content="Login" />
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Login</Breadcrumb.Item>
      </Breadcrumb>
      <LoginForm />
    </Container>
  );
}

export default Login;
