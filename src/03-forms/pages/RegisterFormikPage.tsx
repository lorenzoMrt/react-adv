import { Formik } from "formik";
import React from "react";
import * as Yup from "Yup";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";
export const RegisterFormikPage = () => {
  const { name, email, password, password2, onChange, reset, isValidEmail } =
    useForm({
      name: "",
      email: "",
      password: "",
      password2: "",
    });

  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password2: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Name must be between 2 and 15 characters")
            .max(15, "Name must be between 2 and 15 characters")
            .required(),
          email: Yup.string().email().required(),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required(),
        })}
      ></Formik>
      <form noValidate>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
          name="name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Field required*</span>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          name="email"
          className={`${!isValidEmail(email.trim()) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Invalid Email*</span>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          name="password"
        />
        <input
          type="password"
          placeholder="Repeat password"
          value={password2}
          onChange={onChange}
          name="password2"
        />
        <button type="submit"> Submit </button>
        <button type="button" onClick={reset}>
          {" "}
          Reset{" "}
        </button>
      </form>
    </div>
  );
};
