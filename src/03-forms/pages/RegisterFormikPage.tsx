import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles/styles.css";
export const RegisterFormikPage = () => {
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
          password2: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required(),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput
              name={"name"}
              label={"Name"}
              type="text"
              placeholder="John"
            />

            <MyTextInput
              name={"email"}
              label={"Email"}
              type="email"
              placeholder="john@doe.com"
            />

            <MyTextInput
              name={"password"}
              label={"Password"}
              type="password"
              placeholder="at least 6 characters"
            />

            <MyTextInput
              name={"password2"}
              label={"Confirm password"}
              type="password"
            />

            <button type="submit"> Submit </button>
            <button type="button" onClick={handleReset}>
              {" "}
              Reset{" "}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
