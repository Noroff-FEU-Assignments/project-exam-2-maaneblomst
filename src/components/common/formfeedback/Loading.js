import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

export default function Loading({ animation, variant, classname, statusText }) {
  return (
    <Container>
      <Spinner
        animation={animation}
        role="status"
        variant={variant}
        className={classname}
      />
      {statusText}
    </Container>
  );
}

Loading.propTypes = {
  animation: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
};
