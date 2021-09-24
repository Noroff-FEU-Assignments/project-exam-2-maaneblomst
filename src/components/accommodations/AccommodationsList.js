import { useState, useEffect } from "react";
import axios from "axios";
import { ItemCard, PlaceholderCard } from "../cards/accommodations/Cards";
import PlaceholderImage from "../../images/placeholder/accommodation-loading.png";
import { BASE_URL } from "../../constants/Api";
import SubmissionError from "../common/formfeedback/SubmissionError";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export function AccommodationsList() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const url = BASE_URL + "accommodations";

  useEffect(function () {
    async function getAccommodations() {
      try {
        const response = await axios.get(url);
        setAccommodations(response.data);
      } catch (error) {
        console.log(error);
        setLoadError(error.toString());
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

  if (loadError)
    return (
      <SubmissionError
        variant="danger"
        displayText="We're so sorry. Something went wrong loading the accommodations."
        error={loadError}
      />
    );

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
            images={
              object.images[0] == null ? PlaceholderImage : object.images[0].url
            }
            altText={
              object.images[0] == null ? "" : object.images[0].alternativeText
            }
            facilities={object.facilities}
            description={object.description}
            popular={object.popular}
          />
        ))}
      </Row>
    </Container>
  );
}
