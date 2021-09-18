import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Accommodations from "../../pages/accommodations/Accommodations";
import AccommodationsDetails from "../accommodations/AccommodationsDetails";
import Admin from "../../pages/admin/Admin";
import Messages from "../../pages/admin/Messages";
import AdminEnquiries from "../../pages/admin/AdminEnquiries";
import Bergen from "../../pages/bergen/Bergen";
import Overview from "../../pages/admin/Overview";
import Contact from "../../pages/contact/Contact";
import Navigation from "../nav/Nav";
import FooterNav from "./FooterNav";

function Routes() {
  return (
    <Router>
      <Navigation />
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/accommodations">
            <Accommodations />
          </Route>
          <Route exact path="/accommodations/:id">
            <AccommodationsDetails />
          </Route>
          <Route exact path="/Bergen">
            <Bergen />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/messages">
            <Messages />
          </Route>
          <Route exact path="/adminenquiries">
            <AdminEnquiries />
          </Route>
          <Route exact path="/overview">
            <Overview />
          </Route>
        </Switch>
      </>
      <FooterNav />
    </Router>
  );
}

export default Routes;
