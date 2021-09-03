import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Accommodations from "../../pages/accommodations/Accommodations";
import AccommodationsDetails from "../accommodations/AccommodationsDetails";
import Admin from "../../pages/admin/Admin";
import Enquiries from "../../pages/enquiries/Enquiries";
import Favourites from "../../pages/favourites/Favourites";
import Login from "../../pages/login/Login";
import Contact from "../../pages/contact/Contact";
import Navigation from "../nav/Nav";
import Container from "react-bootstrap/Container";

function Routes() {
  return (
    <Router>
      <Navigation />
      <Container fluid>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/accommodations">
            <Accommodations />
          </Route>
          <Route exact path="/enquiries">
            <Enquiries />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/favourites">
            <Favourites />
          </Route>
          <Route exact path="/accommodations/:id">
            <AccommodationsDetails />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default Routes;
