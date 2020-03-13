import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  firstName: yup.string().required(),
  lastName: yup.string().required()
});

export default schema;
