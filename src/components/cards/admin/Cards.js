import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

export function DashboardCard({ title, link, icon, desc }) {
  return (
    <Col xs={12} sm={6} md={6} lg={3} className="accommodation mt-4 p-1">
      <Link to={`/${link}`} className="text-decoration-none">
        <Card className="w-75 h-100 m-3 p-1 rounded shadow text-dark text-center">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div>{icon}</div>
            <Card.Text className="text-muted">{desc}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}
