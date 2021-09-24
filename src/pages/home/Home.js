import { PopularObjects } from "../../components/accommodations/PopularObjects";
import SearchBar from "../../components/search/SearchBar";
import Heading from "../../components/common/Heading";
import { TextSectionRight } from "../../components/common/TextSection";
import { DividerSection } from "../../components/common/DividerSection";
import HappyHolidaze from "../../images/home/happy_holidaze.jpg";
import IconGroup from "../../components/common/IconGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
function Home() {
  return (
    <main>
      <div className="hero-image-home">
        <Container className="hero-search">
          <Heading size="1" content="Book your next stay in Bergen" />
          <SearchBar />
        </Container>
      </div>
      <section>
        <Container className="fs-3 text-center p-5">
          <p>
            An authentic experience of the beautiful pearl on the coast of
            Norway
          </p>
        </Container>
        <Row className="text-center p-2 mb-2">
          <IconGroup />
        </Row>
      </section>
      <aside>
        <Row>
          <PopularObjects />
        </Row>
      </aside>
      <section>
        <TextSectionRight
          title="Happy Holidaze!"
          content="Holidaze offers custom made tours all over the beautiful west coast of Norway, and we would love to guide you or your group on unforgettable experiences. Our local guides (most of them born and raised in Bergen), have used their expertise to handpick the best, authentic accommodations Bergen has to offer."
          image={HappyHolidaze}
          alt="Two female Holidaze tourists with blue shirts smiling and using a map"
        />
      </section>
      <aside>
        <DividerSection
          title="Need something special?"
          content="We'd love to help you plan your trip to Bergen"
          buttonTitle="Get in Touch"
          link="/contact"
        />
      </aside>
    </main>
  );
}
export default Home;
