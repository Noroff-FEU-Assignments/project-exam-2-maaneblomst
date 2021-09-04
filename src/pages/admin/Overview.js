import { AccommodationsList } from "../../components/accommodations/AccommodationsList";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";

function Overview() {
  return (
    <Container>
      <Heading size="1" content="Overview" />
      <AccommodationsList />
    </Container>
  );
}

export default Overview;
