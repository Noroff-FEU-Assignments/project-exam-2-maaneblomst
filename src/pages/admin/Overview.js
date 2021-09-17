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
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/admin">Dashboard</Link>
        </Breadcrumb.Item>
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
