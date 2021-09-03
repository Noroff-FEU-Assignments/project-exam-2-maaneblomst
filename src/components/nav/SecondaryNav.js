import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

function SecondaryNav() {
  return (
    <Nav className="mr-auto">
      <Container>
        <NavDropdown title="My Account" id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link to="/login">Login</Link>
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Nav>
  );
}
export default SecondaryNav;
