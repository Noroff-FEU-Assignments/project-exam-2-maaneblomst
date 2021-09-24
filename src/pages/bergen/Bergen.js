import Heading from "../../components/common/Heading";
import Bryggen from "../../images/bergen/ToDo/bryggen.jpg";
import RestaurantImage from "../../images/bergen/ToDo/restaurants.jpg";
import Floyen from "../../images/bergen/ToDo/floyen.jpg";
import {
  TextSectionLeft,
  TextSectionRight,
} from "../../components/common/TextSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Bergen() {
  return (
    <main>
      <div className="hero-image-bergen mb-4"></div>
      <Container className="content-wrapper p-3">
        <Heading size="1" content="Bergen" />
        <Row>
          <Col />
          <Col lg={8}>
            <Container className="fs-5 text-center p-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et?
              </p>
            </Container>
          </Col>
          <Col />
        </Row>
        <section>
          <Heading size="2" content="Things to do in Bergen?" />
          <TextSectionLeft
            title="Do this"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={Bryggen}
            alt="Beautiful Bergen Brygge in sunlight"
          />
          <TextSectionRight
            title="Or this"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={RestaurantImage}
            alt="A happy couple dining excited about the food"
          />
          <TextSectionLeft
            title="Or even this"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={Floyen}
            alt="a gloomy picture of Fløybanen in Bergen, with Bergen city in the background"
          />
        </section>
      </Container>
    </main>
  );
}

export default Bergen;
