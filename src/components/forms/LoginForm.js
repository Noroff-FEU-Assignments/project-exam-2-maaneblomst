import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL } from "../../constants/Api";
import AuthContext from "../../context/AuthContext";
import DisplayAlert from "../common/DisplayAlert";
import Loading from "../common/formfeedback/Loading";
import SubmissionError from "../common/formfeedback/SubmissionError";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";

const url = BASE_URL + "auth/local";

const schema = yup.object().shape({
  identifier: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [, setAuth] = useContext(AuthContext);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //an eslint error would not let me pass options as a variable, even though it is used.
  // eslint-disable-next-line
  const options = {
    body: {
      identifier: "test@test.com",
      password: "Password",
    },
    headers: {
      "Content-Type": "application/json",
    },
  };

  async function onSubmit(options) {
    setSubmit(true);
    setLoading(true);
    try {
      const response = await axios.post(url, options);
      setAuth(response.data);
      console.log(response.data);
      setTimeout(function () {
        history.push("/admin");
      }, 1000);
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
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
  if (loginError)
    return (
      <SubmissionError
        variant="danger"
        displayText="We're so sorry. Did you input the right username and password?"
        error={loginError}
      />
    );
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup disabled={submit}>
          <Form.Label>Username</Form.Label>
          <Form.Control
            {...register("identifier")}
            name="identifier"
            placeholder="hello@holidaze.com"
            autoComplete="username"
          />
          {errors.identifier && (
            <DisplayAlert variant="warning">
              {errors.identifier.message}
            </DisplayAlert>
          )}
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password")}
            name="password"
            placeholder="password"
            type="password"
            autoComplete="current-password"
          />
          {errors.password && (
            <DisplayAlert variant="warning">
              {errors.password.message}
            </DisplayAlert>
          )}
          <Button type="submit" variant="outline-primary" className="mt-3">
            Login
          </Button>
          <Button disabled variant="link" className="secondary,">
            I forgot my password
          </Button>
        </FormGroup>
      </Form>
    </>
  );
}
