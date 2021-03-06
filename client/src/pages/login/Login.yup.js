import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email(),
  password: yup.string().required()
});

export default schema;
