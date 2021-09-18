import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../constants/Api";
import axios from "axios";
import DisplayAlert from "../common/DisplayAlert";
import FormError from "../common/FormError";
import { useForm } from "react-hook-form";
import { useState } from "react";
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
    try {
      const response = await axios.post(url, options);
      setSubmit(true);
      console.log(response.data);
    } catch (error) {
      setSubmissionError(true);
      console.log(submissionError);
    } finally {
      setSubmit(false);
    }
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      {submit && (
        <DisplayAlert variant="success">
          Thank you! Your form has been submitted.
        </DisplayAlert>
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
            <FormError variant="warning">{errors.firstName.message}</FormError>
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
            <FormError variant="warning">{errors.email.message}</FormError>
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
            <FormError variant="warning">{errors.message.message}</FormError>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Group className="text-center p-2">
        <Button variant="primary" type="submit" className="mt-2">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}
