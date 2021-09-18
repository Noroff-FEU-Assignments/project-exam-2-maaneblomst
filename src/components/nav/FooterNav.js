import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import logo from "../../images/logos/brand_logo_dark.png";
import Row from "react-bootstrap/Row";

function FooterNav() {
  return (
    <>
      <Nav className="justify-content-center bg-dark sticky-bottom text-center p-4">
        <Row>
          <Col xs={12} sm={8} md={4} lg={4}>
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
          </Col>
          <Col xs={12} sm={8} md={4} lg={4}>
            <Link to="/accommodations" className="nav-link">
              Accommodations
            </Link>
            <Link to="#" className="nav-link">
              Bergen
            </Link>
          </Col>
          <Col xs={12} sm={8} md={4} lg={4}>
            <Link to="#" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Col>
        </Row>
      </Nav>
    </>
  );
}

export default FooterNav;
