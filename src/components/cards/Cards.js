import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function ItemCard({ id, image, name, price }) {
  return (
    <Col xs={12} sm={10} md={8} lg={4} className="accommodation mt-4 p-0">
      <Link to={`/accommodations/${id}`}>
        <Card className="rounded shadow">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>{price}</Card.Subtitle>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}
