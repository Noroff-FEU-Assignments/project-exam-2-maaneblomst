import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../images/logos/brand_logo_dark.png";

function FooterNav() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" className="mt-2 sticky-bottom">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar" />
        <Navbar.Collapse id="basic-navbar">
          <Nav className="mx-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/accommodations" className="nav-link">
              Accommodations
            </Link>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FooterNav;
