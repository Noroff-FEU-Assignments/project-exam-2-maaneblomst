import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { BASE_URL } from "../../constants/Api";
import Container from "react-bootstrap/Container";

export function EnquiriesList() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = BASE_URL + "enquiries";

  const http = useAxios();

  useEffect(function () {
    async function getEnquiries() {
      try {
        const response = await http.get(url);
        setEnquiries(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getEnquiries();
    console.log(enquiries);
    // eslint-disable-next-line
  }, []);

  if (loading) return <span>Loading enquiries...</span>;

  if (error)
    return (
      <div>Sorry, something went wrong. Please contact your administrator.</div>
    );

  return (
    <Container className="enquiries">
      {enquiries.map((request) => {
        const name = request.name;
        const id = request.id;
        const email = request.email;
        const date = request.date;
        const accommodation = request.accommodation;
        const message = request.message;

        return (
          <ul key={id}>
            <li>Name:{name}</li>
            <li>E-mail:{email}</li>
            <li>Date: {date}</li>
            <li>Accommodation: {accommodation}</li>
            <li>Message: {message}</li>
          </ul>
        );
      })}
    </Container>
  );
}
