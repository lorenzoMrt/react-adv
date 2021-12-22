import React from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";
export const RegisterPage = () => {
  const { name, email, password, password2, onChange, reset, isValidEmail } =
    useForm({
      name: "",
      email: "",
      password: "",
      password2: "",
    });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Register</h1>
      <form noValidate onSubmit={onSubmit}>
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
