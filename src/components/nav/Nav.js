import { Link } from "react-router-dom";
import SecondaryNav from "./SecondaryNav";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../images/logos/brand_logo.png";

function Navigation() {
  return (
    <Navbar bg="white" expand="lg" className="mb-4">
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
        <Navbar.Toggle aria-controls="basic-navbar" />
        <Navbar.Collapse id="basic-navbar">
          <Nav className="mx-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/accommodations" className="nav-link">
              Accommodations
            </Link>
            <Link to="#" className="nav-link">
              Bergen
            </Link>
            <Link to="#" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
          <SecondaryNav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
