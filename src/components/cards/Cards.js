import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function ItemCard({ id, image, name, price, facilities }) {
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
    <Col xs={12} sm={10} md={8} lg={4} className="accommodation mt-4 p-0">
      <Link to={`/accommodations/${id}`} className="text-decoration-none">
        <Card className="w-75 m-3 rounded shadow text-dark">
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
