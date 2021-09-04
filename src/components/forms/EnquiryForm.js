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
  date: yup.date().required("Please enter your booking date"),
  message: yup.string().min(10, "Your message must be at least 10 characters"),
});

export default function EnquiryForm() {
  const [submit, setSubmit] = useState(false);
  const [sumbissionError, setSubmissionError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const options = {
    body: {
      name: "John Wayne",
      email: "hello@waynesworld.com",
      accommodation: "Lorem Ipsum Cabin",
      date: "2021-09-31",
      message: "Hello you silly you",
    },
    headers: {
      "Content-Type": "application/json",
    },
  };
  async function onSubmit(options, e) {
    try {
      const response = await axios.post(url, options);
      setSubmit(true);
      console.log(response.data);
      e.target.reset(); // reset after form submit
    } catch (error) {
      setSubmissionError(true);
      console.log(error);
    } finally {
    }
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      {submit && (
        <DisplayAlert variant="success">
          Thank you! Your form has been submitted.
        </DisplayAlert>
      )}
      <Form.Row>
        <Form.Group as={Col} controlId="formFirstName" className="d-sm-block">
          <Form.Label>First Name</Form.Label>
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
        <Form.Group
          as={Col}
          controlId="formAccommodation"
          className="d-sm-block"
        >
          <Form.Label>Your Accommodation</Form.Label>
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
        Submit
      </Button>
    </Form>
  );
}
