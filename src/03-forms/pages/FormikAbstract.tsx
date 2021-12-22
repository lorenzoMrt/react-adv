import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import "../styles/styles.css";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
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
            <MyTextInput
              name={"firstName"}
              label={"First name"}
              placeholder="John"
            />
            <MyTextInput
              name={"lastName"}
              label={"Last name"}
              placeholder="Doe"
            />
            <MyTextInput
              name={"email"}
              label={"Email"}
              placeholder="John@doe.com"
              type="email"
            />

            <MySelect name={"jobType"} label={"Job type"}>
              <option value="">Choose a job</option>
              <option value="IT">IT</option>
              <option value="UX-designer">UX designer</option>
              <option value="Product Manager">Product manager</option>
            </MySelect>

            <MyCheckbox name={"terms"} label={"Terms & conditions"} />

            <button type="submit"> Submit </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
