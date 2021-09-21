import { PopularObjects } from "../../components/accommodations/PopularObjects";
import SearchBar from "../../components/search/SearchBar";
import Heading from "../../components/common/Heading";
import { TextSectionRight } from "../../components/common/TextSection";
import { DividerSection } from "../../components/common/DividerSection";
import HappyHolidaze from "../../images/home/happy_holidaze.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import IconGroup from "../../components/common/IconGroup";

function Home() {
  return (
    <>
      <div className="hero-image-home">
        <Container className="hero-search">
          <Heading size="1" content="Book your next stay in Bergen" />
          <SearchBar />
        </Container>
      </div>
      <Container className="fs-3 text-center p-5">
        <p>
          An authentic experience of the beautiful pearl on the coast of Norway
        </p>
      </Container>
      <Row className="text-center p-2 mb-2">
        <IconGroup />
      </Row>
      <Row className="mb-3">
        <PopularObjects />
      </Row>
      <Row className="p-3">
        <TextSectionRight
          title="Happy Holidaze!"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          image={HappyHolidaze}
        />
      </Row>
      <DividerSection
        title="Need something special?"
        content="Holidaze offers custom made tours all over the beautiful west coast of Norway, and we would love to guide you or your group on unforgettable experiences."
        buttonTitle="Get in Touch"
        link="/contact"
      />
    </>
  );
}
export default Home;
