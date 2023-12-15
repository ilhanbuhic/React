import * as Yup from 'yup'

export const SignupSchema = () =>
  Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .matches(
        /^(?=.*[A-Z])(?=.*\d)/,
        'Password must contain at least one uppercase letter and one number'
      )
      .required('Password is required'),
  })
