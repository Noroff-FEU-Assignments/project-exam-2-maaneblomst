import { Link } from "react-router-dom";
import Heading from "./Heading";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { string } from "prop-types";

export function DividerSection({ title, content, buttonTitle, link }) {
  return (
    <Row className="bg-light mt-5">
      <Col></Col>
      <Col lg={4} md={6} sm={12} xs={12} className="text-center p-5">
        <Heading size="4" content={title} />
        <p className="text-muted ">{content}</p>
        <Link to={link} className="d-block">
          <Button className="btn-lg" variant="outline-secondary">
            {buttonTitle}
          </Button>
        </Link>
      </Col>
      <Col></Col>
    </Row>
  );
}

DividerSection.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  buttonTitle: string,
  link: string,
};
