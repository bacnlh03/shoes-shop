import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string()
    .email("Please enter a valid email address")
    .required('Please enter an email address'),
  password: yup.string()
    .min(6, "Password must be at least 6 characters")
    .required('Please enter a password')
});

export default loginSchema;