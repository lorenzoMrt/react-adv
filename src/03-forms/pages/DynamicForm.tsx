import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MySelect, MyTextInput } from "../components";
import json from "../data/custom-form.json";

const initialValues: { [key: string]: any } = {};
const requiredInputs: { [key: string]: any } = {};

for (const input of json) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;
  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required();
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value,
        `Must be at least ${rule.value} characters`
      );
    }
    if (rule.type === "email") {
      schema = schema.email("Invalid format");
    }
  }
  requiredInputs[input.name] = schema;
}

const schema = Yup.object({ ...requiredInputs });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(v) => console.log(v)}
        validationSchema={schema}
      >
        {(formik) => (
          <Form>
            {json.map(({ label, name, placeholder, type, options }) => {
              if (type === "select") {
                return (
                  <MySelect name={name} label={label}>
                    <option value="">{placeholder}</option>
                    {options?.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              return (
                <MyTextInput
                  type={type as any}
                  label={label}
                  key={name}
                  name={name}
                  placeholder={placeholder}
                />
              );
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
