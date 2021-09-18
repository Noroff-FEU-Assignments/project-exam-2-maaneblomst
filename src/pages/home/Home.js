import { PopularObjects } from "../../components/accommodations/PopularObjects";
import SearchBar from "../../components/search/SearchBar";
import Heading from "../../components/common/Heading";
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
      <Row>
        <PopularObjects />
      </Row>
    </>
  );
}
export default Home;
