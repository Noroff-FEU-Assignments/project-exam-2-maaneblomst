import { DashboardCard } from "../../components/cards/admin/Cards";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Envelope, Calendar, Folder } from "react-bootstrap-icons";

function Admin() {
  let envelope = <Envelope size={40} />;
  let calendar = <Calendar size={40} />;
  let folder = <Folder size={40} />;

  return (
    <main>
      <Container className="content-wrapper">
        <Heading size="1" content="Dashboard" />
        <Row className="m-5">
          <DashboardCard title="Messages" link="messages" icon={envelope} />
          <DashboardCard
            title="Enquiries"
            link="adminenquiries"
            icon={calendar}
          />
          <DashboardCard title="Accommodations" link="overview" icon={folder} />
        </Row>
        <Row>
          <Container style={{ height: "250px" }} />
        </Row>
      </Container>
    </main>
  );
}

export default Admin;
