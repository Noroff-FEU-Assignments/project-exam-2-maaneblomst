import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { BoxArrowRight, Speedometer } from "react-bootstrap-icons";
import { Key } from "react-bootstrap-icons";

function SecondaryNav() {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();

  function logOut() {
    setAuth(null);
    history.push("/");
  }
  return (
    <Nav className="mr-auto">
      <Container>
        <NavDropdown title="My Account" id="basic-nav-dropdown">
          {auth ? (
            <>
              <NavDropdown.Item
                as={Link}
                to="/admin"
                className="basic-nav-dropdown"
              >
                <Speedometer></Speedometer>Dashboard
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <Button variant="link" onClick={logOut}>
                <BoxArrowRight></BoxArrowRight>Log out
              </Button>
            </>
          ) : (
            <NavDropdown.Item
              as={Link}
              to="/login"
              className="basic-nav-dropdown"
            >
              <Key></Key>Login
            </NavDropdown.Item>
          )}
        </NavDropdown>
      </Container>
    </Nav>
  );
}
export default SecondaryNav;
