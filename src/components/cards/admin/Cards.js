import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export function DashboardCard({ title, link, icon }) {
  return (
    <Col xs={12} sm={6} md={4} lg={4} className="accommodation mt-4 p-1">
      <Link to={`/${link}`} className="text-decoration-none">
        <Card className="w-75 h-100 m-3 p-1 rounded shadow text-dark text-center">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div>{icon}</div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}
