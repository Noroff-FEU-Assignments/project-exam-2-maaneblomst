import Heading from "../../components/common/Heading";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Hero from "../../images/home/bergen_home.jpg";

function Home() {
  return (
    <>
      <Heading size="1" display="d-none" content="Home" />
      <Container>
        <Image
          src={Hero}
          width={1300}
          className="mb-2"
          fluid
          alt="image"
        ></Image>
      </Container>
    </>
  );
}

export default Home;
