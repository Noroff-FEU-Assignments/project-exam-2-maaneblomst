import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { BASE_URL } from "../../constants/Api";
import AuthContext from "../context/AuthContext";
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
  const [loginError, setLoginError] = useState(null);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [, setAuth] = useContext(AuthContext);

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
    setLoginError(null);

    try {
      const response = await axios.post(url, options);
      setAuth(response.data);
      console.log(response.data);
      history.push("/admin");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmit(false);
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError variant="danger">{loginError}</FormError>}
        <FormGroup disabled={submit}>
          <Form.Label>Username</Form.Label>
          <Form.Control
            {...register("identifier")}
            name="identifier"
            placeholder="username"
          />
          {errors.identifier && (
            <FormError variant="warning">{errors.identifier.message}</FormError>
          )}
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password")}
            name="password"
            placeholder="password"
          />
          {errors.password && (
            <FormError variant="warning">{errors.password.message}</FormError>
          )}
          <Button type="submit" className="mt-3">
            {submit ? "Logging in..." : "Login"}
          </Button>
        </FormGroup>
      </Form>
    </>
  );
}
