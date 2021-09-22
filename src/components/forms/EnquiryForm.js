import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../constants/Api";
import DisplayAlert from "../common/DisplayAlert";
import FormError from "../common/FormError";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { EmojiSmile, EmojiFrown } from "react-bootstrap-icons";
import { useHistory } from "react-router";

const url = BASE_URL + "enquiries";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your first name")
    .min(1, "Your name must be at least 2 characters."),
  email: yup
    .string()
    .required("Please enter your e-mail")
    .email("Please enter a valid e-mail"),
  accommodation: yup
    .string()
    .required("Please enter your desired accommodation")
    .min(5, "Your accommodation must have at least 5 characters"),
  from_date: yup.date(),
  to_date: yup.date(),
  message: yup.string(),
});

export default function EnquiryForm({ id, name }) {
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const history = useHistory();

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
      accommodation: "Lorem Ipsum Cabin",
      date_from: JSON.stringify(new Date()),
      date_to: JSON.stringify(new Date()),
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
      setSubmit(true);
      console.log(response.data);
      setTimeout(function () {
        history.go();
      }, 1800);
    } catch (error) {
      setSubmissionError(error.toString());
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading)
    return (
      <Container>
        <Spinner
          animation="border"
          role="status"
          variant="primary"
          className="d-block"
        />
        Loading...
      </Container>
    );
  if (submissionError)
    return (
      <DisplayAlert variant="danger">
        <EmojiFrown className="d-block" />
        We're so sorry. Something wrong happened.
        <br />
        {submissionError}
      </DisplayAlert>
    );

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="mt-1">
      {submit && (
        <DisplayAlert variant="success">
          <EmojiSmile className="d-block"></EmojiSmile>
          Thank you! Your enquiry has been submitted. Closing window..
        </DisplayAlert>
      )}
      <Form.Row>
        <Form.Group as={Col} controlId="formName" className="d-sm-block">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Your first and last name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <FormError variant="warning">{errors.name.message}</FormError>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Row>
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
            <FormError variant="warning">{errors.email.message}</FormError>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Label>Your Chosen Accommodation</Form.Label>
        {id ? (
          <>
            <Form.Control
              type="text"
              value={name}
              readOnly
              {...register("accommodation", { required: true })}
            />
          </>
        ) : (
          <Form.Group
            as={Col}
            controlId="formAccommodation"
            className="d-sm-block"
          >
            <Form.Control
              type="name"
              placeholder="Please enter your desired accommodation"
              {...register("accommodation", { required: true })}
            />
            {errors.accommodation && (
              <FormError variant="warning">
                {errors.accommodation.message}
              </FormError>
            )}
          </Form.Group>
        )}
      </Form.Row>
      <Form.Row>
        <Form.Group>
          <Form.Label>Arrival</Form.Label>
          <Form.Control
            id="date_from"
            type="date"
            {...register("date_from", { required: true })}
          ></Form.Control>
          {errors.fromDate && (
            <FormError variant="warning">{errors.fromDate.message}</FormError>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Check-out</Form.Label>
          <Form.Control
            id="date_to"
            type="date"
            {...register("date_to", { required: true })}
          ></Form.Control>
          {errors.toDate && (
            <FormError variant="warning">{errors.toDate.message}</FormError>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter your message here (at least 10 characters)"
          {...register("message", { required: true })}
        ></Form.Control>
        {errors.message && (
          <FormError variant="warning">{errors.message.message}</FormError>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
}
