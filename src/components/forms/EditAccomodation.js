import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../constants/Api";
import DisplayAlert from "../common/DisplayAlert";
import FormError from "../common/FormError";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { EmojiSmile, EmojiFrown } from "react-bootstrap-icons";
import { useHistory } from "react-router";

// Sett inn reset på popular-checkbox!

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter a new name for your accommodation")
    .min(1, "The name must be at least 2 characters."),
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

export default function EditAccommodation({
  id,
  name,
  description,
  price,
  popular,
  images,
}) {
  const [submit, setSubmit] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const http = useAxios();
  const history = useHistory();
  const formData = new FormData();

  const url = BASE_URL + "accommodations/" + id;

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
    setLoading(true);
    try {
      const response = await http.put(url, formData);
      setSubmit(true);
      console.log(response.data);
      setTimeout(function () {
        history.go();
      }, 2000);
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
    <Form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      {submit && (
        <DisplayAlert variant="success">
          <EmojiSmile className="d-block"></EmojiSmile>
          Great! The accommodation was updated. Closing window..
        </DisplayAlert>
      )}
      <Form.Row>
        <Form.Group as={Col} controlId="formName" className="d-sm-block">
          <Form.Control
            className="d-none"
            type="number"
            value={id}
            {...register("id", { required: true })}
          />
          <Form.Label>Name: {name}</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter new name"
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
          <p className="text-muted text-small">{description}</p>
          <Form.Control
            type="textarea"
            placeholder="Enter new description"
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
          <Form.Label>Price: {price}</Form.Label>
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
          id="popular"
          label="Popular"
          value={popular}
          defaultChecked={false}
          onChange={() => setChecked(true)}
          {...register("popular", { required: true })}
        ></Form.Check>
        {errors.popular && (
          <FormError variant="warning">{errors.popular.message}</FormError>
        )}
      </Form.Group>
      <Image fluid src={images} className="mb-2" />
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.File multiple name="images" {...register("files.images")} />
        {errors.images && (
          <FormError variant="warning">{errors.images.message}</FormError>
        )}
      </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
}
