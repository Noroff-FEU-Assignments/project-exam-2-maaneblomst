import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/Api";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export default function AccommodationsDetails() {
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  let { id } = useParams();

  const url = BASE_URL + `accommodations/${id}`;

  useEffect(function () {
    async function getAccommodation() {
      try {
        const response = await axios.get(url);
        setAccommodation(response.data);
      } catch (error) {
        console.log(error);
        setLoadError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getAccommodation();
    // eslint-disable-next-line
  }, []);

  if (loading) return <span>Loading...</span>;

  if (loadError) return <div>Error loading</div>;

  const name = accommodation.Name;
  const desc = accommodation.Description;
  const price = accommodation.Price;
  const image = accommodation.Image[0].url;

  return (
    <Container>
      <Image fluid src={image} />
      <h1>{name}</h1>
      <p>{desc}</p>
      <span>{price}</span>
    </Container>
  );
}
