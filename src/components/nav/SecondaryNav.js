import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

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
              <NavDropdown.Item>
                <Link to="/admin" className="basic-nav-dropdown">
                  Dashboard
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <Button variant="link" onClick={logOut}>
                <i className="fas fa-sign-out-alt"></i>Log out
              </Button>
            </>
          ) : (
            <NavDropdown.Item>
              <Link to="/login" className="basic-nav-dropdown">
                Login
              </Link>
            </NavDropdown.Item>
          )}
        </NavDropdown>
      </Container>
    </Nav>
  );
}
export default SecondaryNav;
