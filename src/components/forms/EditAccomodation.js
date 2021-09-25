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
import Image from "react-bootstrap/Image";

const schema = yup.object().shape({
  name: yup.string(),
  description: yup.string(),
  price: yup.number(),
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
        window.location.reload();
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
          displayText="Great! Your accommodation has been updated. Closing window.."
        />
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
            {...register("name")}
          />
          {errors.name && (
            <DisplayAlert variant="warning">{errors.name.message}</DisplayAlert>
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
            {...register("description")}
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
          <Form.Label>Price: {price}</Form.Label>
          <Form.Control
            type="number"
            placeholder="0.00"
            {...register("price")}
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
          defaultChecked={popular}
          onChange={() => setChecked(true)}
          {...register("popular")}
        ></Form.Check>
        {errors.popular && (
          <DisplayAlert variant="warning">
            {errors.popular.message}
          </DisplayAlert>
        )}
      </Form.Group>
      <Image fluid src={images} className="mb-2" />
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.File multiple name="images" {...register("files.images")} />
        {errors.images && (
          <DisplayAlert variant="warning">{errors.images.message}</DisplayAlert>
        )}
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        Update
      </Button>
    </Form>
  );
}
