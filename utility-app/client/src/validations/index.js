import * as yup from "yup";

export const registerSchema = yup.object({
  email: yup.string().required("Email is required"),
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be minimum of 6 characters")
    .max(32, "Password must be max of 32 characters"),
});

export const loginSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
