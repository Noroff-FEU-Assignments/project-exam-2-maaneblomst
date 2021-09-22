import { Link } from "react-router-dom";
import logo from "../../images/logos/Holidaze-logo-dark.png";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function FooterNav() {
  return (
    <footer>
      <Nav className="justify-content-center bg-dark sticky-bottom text-center p-4">
        <Row>
          <Col xs={12} sm={8} md={3} lg={3}>
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
          <Col xs={12} sm={8} md={3} lg={3}>
            <Nav.Item>
              <Link to="/accommodations" className="nav-link">
                Accommodations
              </Link>
            </Nav.Item>
          </Col>
          <Col xs={12} sm={8} md={3} lg={3}>
            <Nav.Item>
              <Link to="/bergen" className="nav-link">
                Bergen
              </Link>
            </Nav.Item>
          </Col>
          <Col xs={12} sm={8} md={3} lg={3}>
            <Nav.Item>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav.Item>
          </Col>
        </Row>
      </Nav>
    </footer>
  );
}

export default FooterNav;
