import { AccommodationsList } from "../../components/accommodations/AccommodationsList";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import AddModal from "../../components/modals/AddModal";

function Overview() {
  return (
    <Container>
      <Heading size="1" content="Accommodations" />
      <Container className="text-center">
        <AddModal />
      </Container>
      <AccommodationsList />
    </Container>
  );
}

export default Overview;
