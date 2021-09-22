import PropTypes from "prop-types";
import DisplayAlert from "../DisplayAlert";
import { EmojiFrown } from "react-bootstrap-icons";

export default function SubmissionError({ variant, displayText, error }) {
  return (
    <DisplayAlert variant={variant}>
      <EmojiFrown className="d-block" />
      {displayText}
      <br />
      {error}
    </DisplayAlert>
  );
}

SubmissionError.propTypes = {
  variant: PropTypes.string.isRequired,
  displayText: PropTypes.string,
  error: PropTypes.string,
};
