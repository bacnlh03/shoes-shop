import * as yup from "yup";

const registerSchema = yup.object().shape({
  email: yup.string()
    .email("Please enter a valid email address")
    .required("Please enter an email address"),
  username: yup.string()
    .required("Please enter username"),
  password: yup.string()
    .required("Please enter a password")
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
      "Password must contain upper, lower case letters and numbers"
    ),
  confirmPassword: yup.string()
    .required("Please confirm password")
    .oneOf([yup.ref("password")], "Do not match password")
});

export default registerSchema;