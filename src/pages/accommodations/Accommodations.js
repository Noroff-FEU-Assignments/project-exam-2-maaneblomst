import Heading from "../../components/common/Heading";
import AccommodationsList from "../../components/accommodations/AccommodationsList";
import ImageCarousel from "./ImageCarousel";
import Container from "react-bootstrap/Container";

function Accommodations() {
  return (
    <>
      <ImageCarousel />
      <Container>
        <Heading size="1" content="Accommodations" />
        <AccommodationsList />
      </Container>
    </>
  );
}

export default Accommodations;
