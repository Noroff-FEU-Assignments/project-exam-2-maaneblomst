import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../constants/Api";
import useAxios from "../hooks/useAxios";
import DisplayAlert from "../common/DisplayAlert";
import FormError from "../common/FormError";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { EmojiSmile } from "react-bootstrap-icons";

const url = BASE_URL + "accommodations";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your first name")
    .min(1, "Your name must be at least 2 characters."),
  description: yup
    .string()
    .required("Please add a description")
    .min(5, "Please enter a description of at least 20 words"),
  price: yup
    .number()
    .positive("Must be more than 0")
    .required("This field is required"),
  popular: yup.boolean().oneOf([true, false]),
});

export default function AddForm() {
  const [submit, setSubmit] = useState(false);
  const [sumbissionError, setSubmissionError] = useState(null);

  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const options = {
    body: {
      name: "Lorem Ipsum Cabin",
      description: "Lorem ipsum dolor description",
      price: "140.00",
      popular: false,
    },
    headers: {
      "Content-Type": "application/json",
    },
  };
  async function onSubmit(options, e) {
    try {
      const response = await http.post(url, options);
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
          <EmojiSmile className="d-block"></EmojiSmile>
          Great! Your new accommodation has been added
        </DisplayAlert>
      )}
      <Form.Row>
        <Form.Group as={Col} controlId="formName" className="d-sm-block">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter the name of the accommodation"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <FormError variant="warning">{errors.name.message}</FormError>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter a description"
            style={{ height: "100px" }}
            {...register("description", { required: true })}
          />
          {errors.description && (
            <FormError variant="warning">
              {errors.description.message}
            </FormError>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group
          as={Col}
          controlId="formAccommodation"
          className="d-sm-block"
        >
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="0.00"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <FormError variant="warning">{errors.price.message}</FormError>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="formPopular">
        <Form.Check
          type="switch"
          id="custom-switch"
          value="false"
          label="Popular"
          {...register("popular", { required: true })}
        ></Form.Check>
        {errors.popular && (
          <FormError variant="warning">{errors.popular.message}</FormError>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
