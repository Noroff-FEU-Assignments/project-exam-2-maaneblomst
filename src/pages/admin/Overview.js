import { AccommodationsList } from "../../components/accommodations/AccommodationsList";
import Heading from "../../components/common/Heading";
import AddModal from "../../components/modals/admin/AddModal";
import Container from "react-bootstrap/Container";

function Overview() {
  return (
    <main>
      <Container>
        <Heading size="1" content="Accommodations" />
        <Container className="text-center">
          <AddModal />
        </Container>
        <AccommodationsList />
      </Container>
    </main>
  );
}

export default Overview;
