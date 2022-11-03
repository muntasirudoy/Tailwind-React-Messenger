import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { container } from '../helper'
import SignupSchema from '../signin/signinSchema'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import ScreenLoader from '../../components/common/ScreenLoader'
import PhoneGuestBtn from '../common/PhoneGuestBtn'
import { getDatabase, ref, set } from 'firebase/database'
import { useSelector, useDispatch } from 'react-redux'
import { storeUser} from '../../slices/UserSlice'
import ConfirmationPopup from '../../components/common/ConfirmationPopup'
import GoogleButton from 'react-google-button'
const initialValues = {
  email: '',
  password: '',
}


const Signin = () => {
  const [loading, setLoading] = useState(false)
  const auth = getAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [sendEmailConfirm, setsendEmailConfirm] = useState(false)

  const [modal, setModal] = useState(false)

  const modalClose = () => {
    setModal(!modal)
  }

  const handleSignInwithGoogle = async()=>{
    // const {user} = await signInGoogle()
    // const res = await createDocForAuth(user)
    //  console.log(res,"response");
  }

  const formik = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values,e) => {

      setLoading(true)
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const userVerified = userCredential.user.emailVerified
          if (userVerified ) {
            console.log("verfied");
            setLoading(false)
            dispatch(storeUser(auth.currentUser?.displayName))
            navigate('/main')
          } else {
            setModal(true)
            setsendEmailConfirm(true)
            setLoading(false)
          }
          // Signed in
          setLoading(false)

          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setLoading(false)
          toast(errorMessage)
        })
    },
  })

  const { values, handleBlur, handleChange, errors, handleSubmit, touched } =
    formik

  return (
    <div className="main_body flex ">
      <div className="left_shape"></div>
      <motion.div variants={container} initial="hidden" animate="visible">
        <div className="border-[1px] border-[#1f2a43] w-[450px] bg-[#0f172a]/30 backdrop-blur-[100px] rounded-xl p-5">
          <div className="w-full flex justify-center">
            <img src={logo} alt="logo" className="my-5 w-[200px]" />
          </div>
          {/* form start */}
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                className={`input_default__form w-full h-[50px] border-[1px] ${
                  errors.email ? 'border-[#1f2a43]' : 'border-[#1f2a43] '
                }`}
                placeholder="Email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className=" text-[#11eefe] text-xs">{errors.email}</p>
              ) : (
                ''
              )}
            </div>
            <div>
              <input
                type="password"
                className={`input_default__form w-full h-[50px] border-[1px] ${
                  errors.password ? 'border-[#1f2a43]' : 'border-[#1f2a43] '
                }`}
                placeholder="Password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <p className=" text-[#11eefe] text-xs">{errors.password}</p>
              )}
            </div>
            <button type="submit" className="form_submit_btn">
              {' '}
              Sign In
            </button>
          </form>

          <div>
            <PhoneGuestBtn
              btnOneSubTitle="Login with your"
              btnOneTitle="Phone Number"
              btnTwoSubTitle="Login as a"
              btnTowTitle="Guest user"
            />
          </div>

          <div className='flex justify-center w-full mt-5'>
          <GoogleButton
               type="dark"
               onClick={handleSignInwithGoogle}
              />
          </div>

          {/* form end */}
          <div className=" flex flex-col items-center mt-5">
            <span className=" text-sm text-slate-400"> or </span>
            <p className=" mt-4 text-slate-400 text-sm">
              Don't have an account ?
              <b>
                {' '}
                <Link to="/signup"> Signup</Link>
              </b>
            </p>
            <p className=" text-slate-400 text-sm mt-4 underline hover:underline-offset-4">
              <Link to="/forgot-password"> Forgot your password?</Link>
            </p>
          </div>
        </div>
      </motion.div>
      {loading && <ScreenLoader />}
      {sendEmailConfirm && <ConfirmationPopup modal={modal} modalClose={modalClose} />}
      <ToastContainer
          className=" text-sm"
          position="bottom-center"
          theme="dark"
        />
    </div>
  )
}

export default Signin
