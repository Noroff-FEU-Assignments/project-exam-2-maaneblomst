//Originally I used BrowseRouter, but switched to HashRouter to be able to navigate properly on Netlify.
//Redirecting in the netlify.toml file would not work, and really needed it to during testing.
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// eslint-disable-next-line
import { PUBLIC_URL } from "../../constants/PublicUrl";
import Navigation from "../nav/Nav";
import FooterNav from "./FooterNav";
import Home from "../../pages/home/Home";
import Accommodations from "../../pages/accommodations/Accommodations";
import AccommodationsDetails from "../accommodations/AccommodationsDetails";
import Admin from "../../pages/admin/Admin";
import Messages from "../../pages/admin/Messages";
import AdminEnquiries from "../../pages/admin/AdminEnquiries";
import Bergen from "../../pages/bergen/Bergen";
import Overview from "../../pages/admin/Overview";
import Contact from "../../pages/contact/Contact";

function Routes() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
