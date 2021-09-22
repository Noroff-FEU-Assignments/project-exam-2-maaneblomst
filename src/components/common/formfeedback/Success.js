import PropTypes from "prop-types";
import DisplayAlert from "../DisplayAlert";
import { EmojiSmile } from "react-bootstrap-icons";

export default function Success({ classname, displayText }) {
  return (
    <DisplayAlert variant="success">
      <EmojiSmile className={classname}></EmojiSmile>
      {displayText}
    </DisplayAlert>
  );
}

Success.propTypes = {
  displayText: PropTypes.string.isRequired,
  classname: PropTypes.string,
};
