import { AccommodationsList } from "../../components/accommodations/AccommodationsList";
import { Link } from "react-router-dom";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Plus } from "react-bootstrap-icons";
import Breadcrumb from "react-bootstrap/Breadcrumb";

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
      <AccommodationsList />
      <Container className="text-center">
        <Link to="/add">
          <Button className="btn-lg text-white">
            <Plus></Plus>Add New Accommodation
          </Button>
        </Link>
      </Container>
    </Container>
  );
}

export default Overview;
