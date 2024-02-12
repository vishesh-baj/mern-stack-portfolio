import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("Incorrect email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const registerSchema = yup.object({
  email: yup.string().email("Incorrect email").required("Email is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
