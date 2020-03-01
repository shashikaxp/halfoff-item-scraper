import * as yup from 'yup';

let schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required()
});

export default schema;