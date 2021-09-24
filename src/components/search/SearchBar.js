import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/Api";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Container from "react-bootstrap/Container";

function SearchBar() {
  const [accommodations, setAccommodations] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
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

  const history = useHistory();

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {};

  const handleOnSelect = (item) => {
    let id = item.id;
    history.push("/accommodations/" + id);
  };

  const handleOnFocus = () => {};

  const formatResult = (item) => {
    return (
      <p
        dangerouslySetInnerHTML={{
          __html: "<strong>" + item + "</strong>",
        }}
      ></p>
    );
  };

  return (
    <Container fluid className="p-2" style={{ width: 300 }}>
      <ReactSearchAutocomplete
        items={accommodations}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
        formatResult={formatResult}
        placeholder={"Search accommodations..."}
        styling={{ iconColor: "orange", fontFamily: "Raleway" }}
      />
    </Container>
  );
}
export default SearchBar;
