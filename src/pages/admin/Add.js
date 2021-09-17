import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import AddNew from "../../components/forms/AddNew";

function Add() {
  return (
    <Container>
      <Heading size="1" content="Add new accommodation" />
      <AddNew />
    </Container>
  );
}

export default Add;
