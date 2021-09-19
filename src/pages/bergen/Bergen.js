import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Bryggen from "../../images/bergen/ToDo/bryggen.jpg";
import RestaurantImage from "../../images/bergen/ToDo/restaurants.jpg";
import Floyen from "../../images/bergen/ToDo/floyen.jpg";

function Bergen() {
  return (
    <>
      <div className="hero-image-bergen mb-4"></div>
      <Container className="content-wrapper p-3">
        <Heading size="1" content="Bergen" />
        <Row>
          <Container className="fs-5 text-center p-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et?
            </p>
          </Container>
        </Row>
        <Heading size="2" content="Things to do in Bergen?" />
        <Row className="m-3">
          <Col xs={12} sm={6} md={6} lg={6}>
            <Heading size="3" content="Do this" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <Image fluid src={Bryggen} />
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
            <Image fluid src={RestaurantImage} />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            <Heading size="3" content="Or this" />
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </Col>
        </Row>
        <Row className="p-2">
          <Col xs={12} sm={6} md={6} lg={6}>
            <Heading size="3" content="Or even this" />
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </Col>
          <Col>
            <Image fluid src={Floyen} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Bergen;
