import Heading from "../../components/common/Heading";
import { AccommodationsList } from "../../components/accommodations/AccommodationsList";
import { PopularObjects } from "../../components/accommodations/PopularObjects";
import { DividerSection } from "../../components/common/DividerSection";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Accommodations() {
  return (
    <>
      <Container className="content-wrapper">
        <Heading size="1" content="Accommodations" />
        <Container>
          <AccommodationsList />
        </Container>
        <DividerSection
          title="Do you have questions?"
          content="Lorem ipsum dolor"
          buttonTitle="Get in Touch"
          link="/contact"
        />
        <Row className="bg-light">
          <PopularObjects />
        </Row>
      </Container>
    </>
  );
}

export default Accommodations;
