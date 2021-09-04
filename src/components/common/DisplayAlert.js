import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

export default function DisplayAlert({ variant, children }) {
  return <Alert variant={variant}>{children}</Alert>;
}

DisplayAlert.propTypes = {
  children: PropTypes.node.isRequired,
};
