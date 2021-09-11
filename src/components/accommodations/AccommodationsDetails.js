import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/Api";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Heading from "../common/Heading";
import EnquiryModal from "../modals/EnquiryModal";
import { PopularObjects } from "./PopularObjects";

export default function AccommodationsDetails() {
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  let { id } = useParams();

  const url = BASE_URL + `accommodations/${id}`;

  useEffect(function () {
    async function getAccommodation() {
      try {
        const response = await axios.get(url);
        setAccommodation(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        setLoadError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getAccommodation();
    // eslint-disable-next-line
  }, []);

  if (loading) return <span>Loading...</span>;

  if (loadError) return <div>Error loading</div>;

  const name = accommodation.name;
  const accId = accommodation.id;
  const desc = accommodation.description;
  const price = accommodation.price;
  const image = accommodation.images[0].formats.small.url;
  const facilities = accommodation.facilities;

  return (
    <Container className="content-wrapper" key={accId}>
      <Row>
        <Col>
          <Image fluid className="d-block mx-auto" src={image} />
        </Col>
      </Row>
      <Row className="p-4 mb-2">
        <Col>
          <h1>{name}</h1>
        </Col>
        <Col>
          <span className="ml-2 p-3 mr-2">
            FROM
            <span className="text-primary font-weight-bold h4 p-2">
              {price}
            </span>
            NOK
          </span>
          <EnquiryModal
            id={accId}
            name={name}
            price={price}
            image={image}
            facilities={facilities}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Heading size="4" content="Description" />
          <p>{desc}</p>
          <Heading size="4" content="Facilities" />
          {facilities.map((facility) => (
            <div key={facility.id}>{facility.facility_name}</div>
          ))}
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <span className="ml-2 p-3 mr-2">
            FROM
            <span className="text-primary font-weight-bold h4 p-2">
              {price}
            </span>
            NOK
          </span>
          <EnquiryModal
            id={accId}
            name={name}
            price={price}
            image={image}
            facilities={facilities}
          />
        </Col>
      </Row>
      <Row className="bg-light mt-5">
        <Col className="text-center p-5">
          <p className="h4">Do you have questions?</p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <Link to="/contact" className="d-block">
            <Button className="btn-lg" variant="outline-secondary">
              Get in Touch
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="bg-light mt-5 p-2">
        <PopularObjects />
      </Row>
    </Container>
  );
}
