import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/Api";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export default function AccommodationsList() {
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
    console.log(accommodations);
    // eslint-disable-next-line
  }, []);

  if (loading) return <span>Loading accommodations...</span>;

  if (error) return <div>Error loading accommodations</div>;

  return (
    <Container className="accommodations">
      {accommodations.map((accommodation) => {
        const name = accommodation.Name;
        const id = accommodation.id;
        const desc = accommodation.Description;
        const price = accommodation.Price;
        const image = accommodation.Image[0].formats.small.url;

        return (
          <Container key={id} className="accommodation mt-4 p-0">
            <Image fluid src={image} />
            <h2>{name} </h2>
            <p>{desc}</p>
            <span className="d-block p-2">{price}</span>
            <Link to={`/accommodations/${id}`}>Read more</Link>
          </Container>
        );
      })}
    </Container>
  );
}
