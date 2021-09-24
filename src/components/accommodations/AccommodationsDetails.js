import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/Api";
import axios from "axios";
import Heading from "../common/Heading";
import EnquiryModal from "../modals/EnquiryModal";
import { PopularObjects } from "./PopularObjects";
import { DividerSection } from "../common/DividerSection";
import PlaceholderImage from "../../images/placeholder/accommodation-loading.png";
import Loading from "../common/formfeedback/Loading";
import SubmissionError from "../common/formfeedback/SubmissionError";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

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

  if (loading)
    return (
      <Loading
        animation="border"
        variant="primary"
        classname="d-block"
        statusText="Loading.."
      />
    );
  if (loadError)
    return (
      <SubmissionError
        variant="danger"
        displayText="We're so sorry. Something went wrong loading the accommodations."
        error={loadError}
      />
    );

  const name = accommodation.name;
  const accId = accommodation.id;
  const desc = accommodation.description;
  const price = accommodation.price;
  const images =
    accommodation.images[0] == null
      ? PlaceholderImage
      : accommodation.images[0].url;
  const facilities = accommodation.facilities;

  return (
    <Container className="content-wrapper" key={accId}>
      <Container fluid className="mb-4">
        <Carousel>
          {accommodation.images.map((image) => (
            <Carousel.Item key={image.name} align="center">
              <Image
                className="d-block w-100 rounded"
                src={image.url}
                alt={image.alternativeText}
              />
              <Carousel.Caption>
                <p>{image.caption}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      <Row className="mt-4 mb-2">
        <Col md={6} lg={6}>
          <Container fluid>
            <Heading size="1" display="text-left" content={name} />
          </Container>
        </Col>
        <Col md={4} lg={2}>
          <Container fluid className="text-center">
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
              images={images}
              facilities={facilities}
            />
          </Container>
        </Col>
        <Col />
      </Row>
      <Row className="mb-4">
        <Col lg={8}>
          <Container fluid>
            <Heading size="4" display="fw-bold" content="Description" />
            <p>{desc}</p>
          </Container>
        </Col>
        <Col lg={2}>
          <Container fluid className="mt-4">
            <Heading size="4" display="fw-bold" content="Facilities" />
            {facilities.map((facility) => (
              <div key={facility.id}>{facility.facility_name}</div>
            ))}
          </Container>
        </Col>
        <Col />
      </Row>
      <DividerSection
        title="Do you have questions?"
        content="We'd love to help you plan your trip"
        buttonTitle="Get in Touch"
        link="/contact"
      />
      <Row className="bg-light mt-5 p-2">
        <PopularObjects />
      </Row>
    </Container>
  );
}
