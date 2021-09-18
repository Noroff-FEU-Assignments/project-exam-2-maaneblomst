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
import { EmojiSmile } from "react-bootstrap-icons";

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
    try {
      const response = await axios.post(url, options);
      setSubmit(true);
      console.log(response.data);
    } catch (error) {
      setSubmissionError(true);
      console.log(error);
      console.log(submissionError);
    } finally {
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="mt-1">
      {submit && (
        <DisplayAlert variant="success">
          Thank you! Your form has been submitted. <EmojiSmile />
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
        Submit
      </Button>
    </Form>
  );
}
