import { DashboardCard } from "../../components/cards/admin/Cards";
import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import { Envelope } from "react-bootstrap-icons";
import { Calendar } from "react-bootstrap-icons";
import { Folder, FolderPlus } from "react-bootstrap-icons";

function Admin() {
  let envelope = <Envelope size={40} />;
  let calendar = <Calendar size={40} />;
  let folder = <Folder size={40} />;
  let folderPlus = <FolderPlus size={40} />;

  return (
    <Container className="content-wrapper">
      <Heading size="1" content="Dashboard" />
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <DashboardCard title="Messages" link="messages" icon={envelope} />
        <DashboardCard
          title="Enquiries"
          link="adminenquiries"
          icon={calendar}
        />
        <DashboardCard title="Accommodations" link="overview" icon={folder} />
      </Row>
    </Container>
  );
}

export default Admin;
