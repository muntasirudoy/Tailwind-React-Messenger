//  sign up helper

export const initialValues = {
  username: '',
  email: '',
  password: '',
  confirm_password: '',
}
export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

export const initialValuesSignin = {
  email: '',
  password: '',
}
