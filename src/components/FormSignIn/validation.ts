import * as yup from "yup"

export const formSignInSchema = yup.object().shape({
  email: yup.string().required().email().max(255),
  password: yup.string().required().min(6),
})
