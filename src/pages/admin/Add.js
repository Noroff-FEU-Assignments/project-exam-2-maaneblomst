import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import AddNew from "../../components/forms/AddNew";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

function Add() {
  return (
    <Container>
      <Heading size="1" content="Add new accommodation" />
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/admin">Dashboard</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Add new</Breadcrumb.Item>
      </Breadcrumb>
      <AddNew />
    </Container>
  );
}

export default Add;
