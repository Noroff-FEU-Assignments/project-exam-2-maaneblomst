import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/Api";
import Heading from "../common/Heading";
import PlaceholderImage from "../../images/placeholder/accommodation-loading.png";
import { ItemCard, PlaceholderCard } from "../cards/accommodations/Cards";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export function PopularObjects() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = BASE_URL + "accommodations";

  useEffect(function () {
    async function getAccommodations() {
      try {
        const response = await axios.get(url);
        setAccommodations(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getAccommodations();
    // eslint-disable-next-line
  }, []);

  if (loading)
    return (
      <Container>
        <PlaceholderCard />
      </Container>
    );

  if (error) return <div>Error loading accommodations</div>;

  const filtered = accommodations.filter(
    (accommodation) => accommodation.popular === true
  );

  return (
    <Container className="popularObjects">
      <Row className="bg-light p-3">
        <Heading size="3" content="Popular Bookings &#128293;" />
        {filtered.map((popObject) => (
          <ItemCard
            key={popObject.id}
            id={popObject.id}
            name={popObject.name}
            price={popObject.price}
            images={
              popObject.images[0] == null
                ? PlaceholderImage
                : popObject.images[0].url
            }
          />
        ))}
      </Row>
    </Container>
  );
}
