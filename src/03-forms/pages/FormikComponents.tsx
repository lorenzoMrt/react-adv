import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string().email("Invalid format").required("Required"),
          terms: Yup.boolean().oneOf([true], "Accept the terms and conditions"),
          jobType: Yup.string()
            .notOneOf(["IT"], "not permitted")
            .required("Required"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job type</label>
            <Field name="jobType" as="select">
              <option value="">Choose a job</option>
              <option value="IT">IT</option>
              <option value="UX-designer">UX designer</option>
              <option value="Product Manager">Product manager</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />
            <label>
              Terms and conditions
              <Field name="terms" type="checkbox" />
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit"> Submit </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
