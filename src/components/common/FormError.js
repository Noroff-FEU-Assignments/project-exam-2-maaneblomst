import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

export default function ValidationError({ variant, children }) {
  return (
    <Alert variant={variant} className="form-error">
      {children}
    </Alert>
  );
}

ValidationError.propTypes = {
  children: PropTypes.node.isRequired,
};
