import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Hero from "../../images/home/bergen_home.jpg";
import { PopularObjects } from "../../components/accommodations/PopularObjects";
import Row from "react-bootstrap/Row";

function Home() {
  return (
    <Container>
      <Heading size="1" display="d-none" content="Home" />
      <Image src={Hero} width={1300} className="mb-2" fluid alt="image"></Image>
      <PopularObjects />
    </Container>
  );
}
export default Home;
