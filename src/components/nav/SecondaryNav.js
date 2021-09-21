import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {
  BoxArrowRight,
  Speedometer,
  PersonCircle,
} from "react-bootstrap-icons";
import LoginModal from "../modals/LoginModal";

function SecondaryNav() {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();

  function logOut() {
    setAuth(null);
    history.push("/");
  }
  return (
    <Nav className="mr-auto">
      {auth ? <PersonCircle size={20} className="text-primary mt-2" /> : ""}
      <Container>
        {auth ? (
          <NavDropdown title="My Account" id="collasible-nav-dropdown">
            <NavDropdown.Item
              as={Link}
              to="/admin"
              eventKey="6"
              className="basic-nav-dropdown"
            >
              <Speedometer></Speedometer> Dashboard
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <Button
              variant="link"
              eventKey="7"
              className="text-decoration-none"
              onClick={logOut}
            >
              <BoxArrowRight></BoxArrowRight> Log out
            </Button>
          </NavDropdown>
        ) : (
          <LoginModal />
        )}
      </Container>
    </Nav>
  );
}
export default SecondaryNav;
