import * as Yup from 'yup'

const SigninSchema = Yup.object({
  email: Yup.string()
    .email('Your email isnt valid yet!')
    .required('Please enter your valid email!'),

  password: Yup.string()
    .min(6, 'Password must be 6 charecter')
    .required('Please enter your valid password!'),
})

export default SigninSchema
