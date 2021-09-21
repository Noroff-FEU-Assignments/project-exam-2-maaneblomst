import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { useHover } from "../../../hooks/useHover";
import PlaceholderImage from "../../../images/placeholder/accommodation-loading.png";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import EditModal from "../../modals/admin/EditModal";
import DeleteModal from "../../modals/admin/DeleteModal";

export function ItemCard({
  id,
  images,
  name,
  price,
  description,
  popular,
  facilities,
}) {
  const [auth] = useContext(AuthContext);
  const [hoverRef, isHovered] = useHover();

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
      <Link
        to={`/accommodations/${id}`}
        ref={hoverRef}
        className="text-decoration-none"
      >
        {isHovered ? (
          <Card className="card-hover w-100 rounded shadow text-dark">
            <Card.Img src={images} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Container className="p-1">
                <span>
                  FROM
                  <span className="text-primary font-weight-bold h4 p-2">
                    {price}
                  </span>
                  NOK
                </span>
              </Container>
              <div key={id.facilitiesToRender}>{facilitiesToRender}</div>
            </Card.Body>
          </Card>
        ) : (
          <Card className="w-100 rounded shadow text-dark">
            <Card.Img src={images} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Container className="p-1">
                <span>
                  FROM
                  <span className="text-primary font-weight-bold h4 p-2">
                    {price}
                  </span>
                  NOK
                </span>
              </Container>
              <div key={id.facilitiesToRender}>{facilitiesToRender}</div>
            </Card.Body>
          </Card>
        )}
      </Link>
      {auth ? (
        <>
          <EditModal
            id={id}
            images={images}
            name={name}
            price={price}
            description={description}
            popular={popular}
          />
          <DeleteModal id={id} />
        </>
      ) : (
        ""
      )}
    </Col>
  );
}

export function PlaceholderCard() {
  return (
    <Row>
      <Col xs={12} sm={6} md={4} lg={4} className="accommodation mt-4 p-4">
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
      <Col xs={12} sm={6} md={4} lg={4} className="accommodation mt-4 p-0">
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
      <Col xs={12} sm={6} md={4} lg={4} className="accommodation mt-4 p-0">
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
    </Row>
  );
}
