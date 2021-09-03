import PropTypes from "prop-types";

function Heading({ size = "1", content, display }) {
  const VariableHeading = `h${size}`;

  return <VariableHeading className={display}>{content}</VariableHeading>;
}

Heading.propTypes = {
  size: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default Heading;
