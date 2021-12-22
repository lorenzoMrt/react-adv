import { ErrorMessage, useField } from "formik";

interface Props {
  name: string;
  label: string;
  [x: string]: any;
}

export const MyCheckBox = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label htmlFor={props.id || props.name}>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
