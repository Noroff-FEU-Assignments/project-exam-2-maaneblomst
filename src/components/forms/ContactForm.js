import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../constants/Api";
import DisplayAlert from "../common/DisplayAlert";
import Loading from "../common/formfeedback/Loading";
import SubmissionError from "../common/formfeedback/SubmissionError";
import Success from "../common/formfeedback/Success";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const url = BASE_URL + "messages";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your first name")
    .min(1, "Your name must be at least 2 characters."),
  email: yup
    .string()
    .required("Please enter your e-mail")
    .email("Please enter a valid e-mail"),
  message: yup
    .string()
    .required("Please enter a message")
    .min(10, "Your message must be at least 10 characters"),
});

export default function ContactForm() {
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  //an eslint error would not let me pass options as a variable, even though it is used.
  // eslint-disable-next-line
  const options = {
    body: {
      name: "John Wayne",
      email: "hello@waynesworld.com",
      message: "Hello you silly you",
    },
    headers: {
      "Content-Type": "application/json",
    },
  };
  async function onSubmit(options) {
    setLoading(true);
    try {
      const response = await axios.post(url, options);
      console.log(response.data);
      setSubmit(true);
    } catch (error) {
      setSubmissionError(error.toString());
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  if (loading)
    if (loading)
      return (
        <Loading
          animation="border"
          variant="primary"
          classname="d-block"
          statusText="Loading.."
        />
      );
  if (submissionError)
    return (
      <SubmissionError
        variant="danger"
        displayText="We're so sorry. Something went wrong."
        error={submissionError}
      />
    );
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="mt-1">
      {submit && (
        <Success
          classname="d-block"
          displayText="Thank you! Your message has been sent. We'll get back to you as soon as we can."
        />
      )}
      <Form.Row className="p-2">
        <Form.Group as={Col} controlId="formFirstName" className="d-sm-block">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Your first and last name"
            {...register("name", { required: true })}
          />
          {errors.firstName && (
            <DisplayAlert variant="warning">
              {errors.firstName.message}
            </DisplayAlert>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Row className="p-2">
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="you@example.com"
            {...register(
              "email",
              { required: true },
              { pattern: /^\S+@\S+$/i }
            )}
          />
          {errors.email && (
            <DisplayAlert variant="warning">
              {errors.email.message}
            </DisplayAlert>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Row className="p-2">
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter your message here (at least 10 characters)"
            {...register("message", { required: true })}
          ></Form.Control>
          {errors.message && (
            <DisplayAlert variant="warning">
              {errors.message.message}
            </DisplayAlert>
          )}
        </Form.Group>
      </Form.Row>
      {submit ? (
        <Button variant="primary" className="d-none">
          Submit
        </Button>
      ) : (
        <Button variant="primary" type="submit">
          Submit
        </Button>
      )}
    </Form>
  );
}
