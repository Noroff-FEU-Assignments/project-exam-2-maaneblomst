import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/Api";
import Container from "react-bootstrap/Container";
import ItemCard from "../cards/Cards";
import Row from "react-bootstrap/Row";

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

  if (loading) return <span>Loading accommodations...</span>;

  if (error) return <div>Error loading accommodations</div>;

  const filtered = accommodations.filter(
    (accommodation) => accommodation.popular === true
  );

  return (
    <Container className="popularObjects">
      <Row>
        {filtered.map((popObject) => (
          <ItemCard
            key={popObject.id}
            id={popObject.id}
            name={popObject.name}
            price={popObject.price}
            image={popObject.images[0].formats.small.url}
          />
        ))}
      </Row>
    </Container>
  );
}