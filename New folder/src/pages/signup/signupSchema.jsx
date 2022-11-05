import * as Yup from 'yup'

const SignupSchema = Yup.object({
  username: Yup.string()
    .min(6, 'Username must be 3 charecter!')
    .max(50, 'To much long!')
    .required('Please enter your valid name!'),

  email: Yup.string()
    .email('Your email isnt valid yet!')
    .required('Please enter your valid email!'),

  password: Yup.string()
    .min(6, 'Password must be 6 charecter')
    .required('Please enter your valid password!'),

  confirm_password: Yup.string()
    .min(6)
    .required('Please re-enter your password correctly!')
    .oneOf([Yup.ref('password'), null], 'Password doesnt match!'),
})

export default SignupSchema
