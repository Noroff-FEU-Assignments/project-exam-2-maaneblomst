import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/Api";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ItemCard from "../cards/Cards";

export function AccommodationsList() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = BASE_URL + "accommodations";

  useEffect(function () {
    async function getAccommodations() {
      try {
        const response = await axios.get(url);
        setAccommodations(response.data);
        console.log(response);
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

  return (
    <Container>
      <Row>
        {accommodations.map((object) => (
          <ItemCard
            className="p-4"
            key={object.id}
            id={object.id}
            name={object.name}
            price={object.price}
            image={object.images[0].formats.small.url}
            facilities={object.facilities}
          />
        ))}
      </Row>
    </Container>
  );
}
