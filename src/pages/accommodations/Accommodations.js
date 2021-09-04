import Heading from "../../components/common/Heading";
import { AccommodationsList } from "../../components/accommodations/AccommodationsList";
import Container from "react-bootstrap/Container";

function Accommodations() {
  return (
    <>
      <Container>
        <Heading size="1" content="Accommodations" />
        <AccommodationsList />
      </Container>
    </>
  );
}

export default Accommodations;
