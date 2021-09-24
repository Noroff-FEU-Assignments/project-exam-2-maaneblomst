import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useForm } from "react-hook-form";
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
  facilities: yup.string(),
  alternativeText: yup.string(),
});

export default function AddNew() {
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [setChecked] = useState(false);

  const http = useAxios();
  const formData = new FormData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmit(data) {
    const { name, popular, price, description, files, alternativeText } = data;
    const uploadFiles = Array.from(files.images);

    uploadFiles.forEach((image) =>
      formData.append("files.images", image, image.name)
    );

    const body = {
      name,
      description,
      price,
      popular,
      alternativeText,
    };

    formData.append("data", JSON.stringify(body));
    setLoading(true);
    try {
      const response = await http.post(url, formData);
      setSubmit(true);
      console.log(response.data);
      setTimeout(function () {
        window.location.reload();
      }, 1800);
    } catch (error) {
      console.log(error);
      setSubmissionError(error.toString());
    } finally {
      setLoading(false);
    }
  }

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
    <Form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      {submit && (
        <Success
          classname="d-block"
          displayText="Great! Your new accommodation has been added. Closing window.."
        />
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
            <DisplayAlert variant="warning">{errors.name.message}</DisplayAlert>
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
            <DisplayAlert variant="warning">
              {errors.description.message}
            </DisplayAlert>
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
            <DisplayAlert variant="warning">
              {errors.price.message}
            </DisplayAlert>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="formPopular">
        <Form.Check
          id="popular"
          label="Popular"
          defaultChecked={false}
          onChange={() => setChecked(true)}
          {...register("popular", { required: true })}
        ></Form.Check>
        {errors.popular && (
          <DisplayAlert variant="warning">
            {errors.popular.message}
          </DisplayAlert>
        )}
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.File multiple name="images" {...register("files.images")} />
        {errors.images && (
          <DisplayAlert variant="warning">{errors.images.message}</DisplayAlert>
        )}
        <Form.Label>Alternative text:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter alternative text for the image"
          {...register("alternativeText")}
        />
        {errors.altText && (
          <DisplayAlert variant="warning">
            {errors.altText.message}
          </DisplayAlert>
        )}
      </Form.Group>
      <Button variant="outline-primary" type="submit" className="mt-2">
        {submit ? "Please wait..." : "Add"}
      </Button>
    </Form>
  );
}
