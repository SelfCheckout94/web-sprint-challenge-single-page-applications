import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Please input your name")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().trim(),
  sauce: yup.string().trim(),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  bacon: yup.boolean(),
  spicySausage: yup.boolean(),
  special: yup.string().trim(),
});

export default formSchema;
