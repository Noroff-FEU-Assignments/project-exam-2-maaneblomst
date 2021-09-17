import { AccommodationsList } from "../../components/accommodations/AccommodationsList";
import { Link } from "react-router-dom";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import AddModal from "../../components/modals/AddModal";

function Overview() {
  return (
    <Container>
      <Heading size="1" content="Accommodations" />
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/admin">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item active>Accommodations</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="text-center">
        <AddModal />
      </Container>
      <AccommodationsList />
    </Container>
  );
}

export default Overview;
