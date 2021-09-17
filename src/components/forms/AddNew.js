import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../constants/Api";
import useAxios from "../hooks/useAxios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DisplayAlert from "../common/DisplayAlert";
import FormError from "../common/FormError";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { EmojiSmile } from "react-bootstrap-icons";

// Sett inn reset på popular-checkbox!

const url = BASE_URL + "accommodations";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your first name")
    .min(1, "Your name must be at least 2 characters."),
  description: yup
    .string()
    .required("Please add a description")
    .min(5, "Please enter a description of at least 5 words"),
  price: yup
    .number()
    .positive("Must be more than 0")
    .required("This field is required"),
  popular: yup.boolean().oneOf([true, false]),
  images: yup.mixed(),
});

export default function AddNew() {
  const [submit, setSubmit] = useState(false);
  const [sumbissionError, setSubmissionError] = useState(null);
  const [checked, setChecked] = useState(false);

  const http = useAxios();
  const formData = new FormData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmit(data) {
    const { name, popular, price, description, files } = data;
    const uploadFiles = Array.from(files.images);

    uploadFiles.forEach((image) =>
      formData.append("files.images", image, image.name)
    );

    const body = {
      name,
      description,
      price,
      popular,
    };

    formData.append("data", JSON.stringify(body));
    console.log(formData);
    try {
      const response = await http.post(url, formData);
      setSubmit(true);
      console.log(response.data);
      console.log("this is a popular product" + checked);
    } catch (error) {
      setSubmissionError(true);
      console.log(error);
      console.log(sumbissionError);
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
          id="popular"
          label="Popular"
          defaultChecked={false}
          onChange={() => setChecked(true)}
          {...register("popular", { required: true })}
        ></Form.Check>
        {errors.popular && (
          <FormError variant="warning">{errors.popular.message}</FormError>
        )}
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.File multiple name="images" {...register("files.images")} />
        {errors.images && (
          <FormError variant="warning">{errors.images.message}</FormError>
        )}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
