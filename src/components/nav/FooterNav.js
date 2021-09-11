import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../images/logos/brand_logo_dark.png";

function FooterNav() {
  return (
    <>
      <Nav className="justify-content-center bg-dark sticky-bottom p-4">
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
    </>
  );
}

export default FooterNav;
