import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import SignupSchema from './signupSchema'
import { motion } from 'framer-motion'
import { initialValues, container } from '../helper'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ConfirmationPopup from '../../components/common/ConfirmationPopup'
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth'
import ScreenLoader from '../../components/common/ScreenLoader'
import { getDatabase, ref, set } from 'firebase/database'

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

const Signup = () => {
  const auth = getAuth()
  const [loading, setLoading] = useState(false)
  const [sendEmailConfirm, setsendEmailConfirm] = useState(false)
  const [errorMessgae, setErrorMessgae] = useState('')
  const [modal, setModal] = useState('')

  const modalClose = () => {
    setModal(!modal)
  }


  const formik = useFormik({
    initialValues,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      setLoading(true)
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser)
            .then((data) => {
              setLoading(false)
              setsendEmailConfirm(true)
              setModal(!modal)
            })
            .then(() => {
              const db = getDatabase()
              set(ref(db, 'users/' + userCredential.user.uid), {
                username: userCredential.user.displayName,
                email: userCredential.user.email,
                img: userCredential.user.photoURL,
              })
            })
          updateProfile(auth.currentUser, {
            displayName: values.username,
            photoURL: logo,
          })
        })
        .catch((error) => {
          setLoading(false)
          const errorMessage = error.message
          if (errorMessage.includes('auth/email-already-in-use')) {
            toast('This email already exist! Please try with another email!')
            // setErrorMessgae(
            //   'This email already exist! Please try with another email.'
            // )
          }
        })
    },
  })

  const { values, handleBlur, handleChange, errors, handleSubmit, touched } =
    formik

  return (
    <div className="main_body relative">
      <div className="left_shape"></div>
      <div className=" flex flex-col">
        <motion.div variants={container} initial="hidden" animate="visible">
          <div className="border-[1px] border-[#1f2a43] w-[450px]  bg-[#0f172a]/30 backdrop-blur-[100px] rounded-xl p-5">
            <div className="w-full flex justify-center">
              <img src={logo} alt="logo" className="my-5 w-[200px]" />
            </div>
            {/* form start */}
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  className={`input_default__form w-full h-[50px] border-[1px] ${
                    errors.username ? 'border-[#1f2a43]' : 'border-[#1f2a43] '
                  }`}
                  placeholder="Username"
                  name="username"
                  id="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.username && touched.username && (
                  <p className=" text-[#11eefe] text-xs">{errors.username}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  className={`input_default__form w-full h-[50px] border-[1px] ${
                    errors.email ? 'border-[#1f2a43]' : 'border-[#1f2a43] '
                  }`}
                  placeholder="Email or mobile number"
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
              <div>
                <input
                  type="text"
                  className={`input_default__form w-full h-[50px] border-[1px] ${
                    errors.confirm_password
                      ? 'border-[#1f2a43]'
                      : 'border-[#1f2a43] '
                  }`}
                  placeholder="Confirm Password"
                  name="confirm_password"
                  id="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirm_password && touched.confirm_password && (
                  <p className=" text-[#11eefe] text-xs">
                    {errors.confirm_password}
                  </p>
                )}
              </div>
              <button type="submit" className="form_submit_btn">
                {' '}
                Sign Up
              </button>
            </form>
            {/* form end */}
            <div className=" flex flex-col items-center mt-3">
              <span className=" text-sm text-slate-400"> or </span>
              <p className=" mt-4 text-slate-400 text-sm">
                Already have an account
                <b>
                  <Link to="/signin"> Signin</Link>
                </b>
              </p>
            </div>
          </div>
        </motion.div>

        {/* {errorMessgae && <p>{errorMessgae}</p>} */}
        <ToastContainer
          className=" text-sm"
          position="bottom-center"
          theme="dark"
        />
      </div>
      {loading && <ScreenLoader />}
      {sendEmailConfirm && (
        <ConfirmationPopup modal={modal} modalClose={modalClose} />
      )}
    </div>
  )
}

export default Signup
