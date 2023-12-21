import * as Yup from 'yup'

export const SignupSchema = () =>
  Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .matches(
        /^(?=.*[A-Z])(?=.*\d)/,
        `Your password should be at least 6 characters long and include:
        \n- One uppercase letter
        \n- One number`
      )
      .required('Password is required'),
  })

// const commonValidationMessage = 'Invalid input'

// export const SigninSchema = Yup.object().shape({
//   email: Yup.string().email(commonValidationMessage),
//   password: Yup.string().required(commonValidationMessage),
// })
