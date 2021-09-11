import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import PlaceholderImage from "../../../images/placeholder/accommodation-loading.png";

export function ItemCard({ id, image, name, price, facilities }) {
  let facilitiesToRender;
  if (facilities) {
    facilitiesToRender = facilities.map((facility) => {
      return (
        <Button
          variant="outline-secondary"
          className="btn-sm m-1 disabled"
          key={facility.id}
        >
          {facility.facility_name}
        </Button>
      );
    });
  }
  return (
    <Col xs={12} sm={6} md={6} lg={4} className="accommodation mt-4 p-4">
      <Link to={`/accommodations/${id}`} className="text-decoration-none">
        <Card className="w-100 m-3 rounded shadow text-dark">
          <Card.Img src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <span className="p-2">
              FROM
              <span className="text-primary font-weight-bold h4 p-1">
                {price}
              </span>
              NOK
            </span>
            <div key={id.facilitiesToRender}>{facilitiesToRender}</div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export function PlaceholderCard() {
  return (
    <Row>
      <Col xs={12} sm={10} md={8} lg={4} className="accommodation mt-4 p-0">
        <Card
          style={{ width: "18rem" }}
          className="w-75 m-3 rounded shadow text-dark"
        >
          <Card.Img variant="top" src={PlaceholderImage} />
          <Card.Body className="mx-auto">
            <Spinner animation="border" variant="primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={10} md={8} lg={4} className="accommodation mt-4 p-0">
        <Card
          style={{ width: "18rem" }}
          className="w-75 m-3 rounded shadow text-dark"
          className="w-75 m-3 rounded shadow text-dark"
        >
          <Card.Img variant="top" src={PlaceholderImage} />
          <Card.Body className="mx-auto">
            <Spinner animation="border" variant="primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={10} md={8} lg={4} className="accommodation mt-4 p-0">
        <Card
          style={{ width: "18rem" }}
          className="w-75 m-3 rounded shadow text-dark"
          className="w-75 m-3 rounded shadow text-dark"
        >
          <Card.Img variant="top" src={PlaceholderImage} />
          <Card.Body className="mx-auto">
            <Spinner animation="border" variant="primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
