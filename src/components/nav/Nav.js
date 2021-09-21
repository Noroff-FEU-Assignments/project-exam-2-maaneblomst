import { Link } from "react-router-dom";
import SecondaryNav from "./SecondaryNav";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../images/logos/Holidaze-logo.png";

function Navigation() {
  return (
    <Navbar collapseOnSelect bg="white" expand="lg" className="mb-4">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <Image
              src={logo}
              className="d-inline-block"
              width="150"
              alt="Holidaze logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Item>
              <Nav.Link eventKey="1" as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" as={Link} to="/accommodations">
                Accommodations
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" as={Link} to="/bergen">
                Bergen
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4" as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <SecondaryNav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
