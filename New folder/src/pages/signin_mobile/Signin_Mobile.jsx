import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BsFillPhoneVibrateFill } from 'react-icons/bs'
import { RiUserSharedFill } from 'react-icons/ri'
import { container } from '../../components/left_panel/helper'
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth'

const Signin_Mobile = () => {
  const [number, setNumber] = useState('')
  const auth = getAuth()
  const appVerifier = window.recaptchaVerifier

  const requestOTP = () => {
    if (number.length >= 10) {
      recaptcha()
      signInNumber()
    } else {
      console.log('number is short')
    }
  }

  const recaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'normal',
        callback: (response) => {
          console.log(response)
        },
      },

      auth
    )
  }

  const signInNumber = () => {
    signInWithPhoneNumber(auth, '8801874303208', appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult
      })
      .catch((error) => {
        console.log(
          '🚀 ~ file: Signin_Mobile.jsx ~ line 46 ~ signInNumber ~ error',
          error
        )
      })
  }

  //   const onSubmitOtpConfirm = () => {
  //     const code = getCodeFromUserInput()
  //     confirmationResult
  //       .confirm(code)
  //       .then((result) => {
  //         // User signed in successfully.
  //         const user = result.user
  //         // ...
  //       })
  //       .catch((error) => {
  //         // User couldn't sign in (bad verification code?)
  //         // ...
  //       })
  //   }

  return (
    <div className=" flex justify-center items-center w-full h-screen">
      <motion.div variants={container} initial="hidden" animate="visible">
        <div className="flex flex-col w-[450px] h-[450px] items-center justify-center border-[1px] border-[#1f2a43] backdrop-blur-md bg-[#0f172a]/90 z-150 rounded-lg p-10 pt-4">
          <div className="w-full">
            <h1 className=" text-slate-100 text-2xl font-semibold mt-5 text-center">
              Reset your password!
            </h1>
          </div>
          <div className="w-full mt-10">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-slate-400 dark:text-gray-300"
            >
              Enter your email
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+12345689"
              required
              onChange={(e) => setNumber(e.target.value)}
            />
            <button
              type="submit"
              className="form_submit_btn"
              onClick={requestOTP}
            >
              {' '}
              Send OTP
            </button>
            <div id="recaptcha-container"></div>
          </div>
          <div className="w-full justify-self-end">
            <div className=" relative justify-between items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-4">
              <Link
                to="/signin"
                className="w-2/4 bg-gray-800 hover:bg-gray-700 focus:ring-0 focus:outline-none focus:ring-gray-300 text-slate-400 rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <BsFillPhoneVibrateFill className="mr-3 w-7 h-7" />
                <div className="text-left">
                  <div className="mb-1 text-xs">Back to login</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">
                    Login
                  </div>
                </div>
              </Link>

              <Link
                to="/signin"
                className=" bg-gray-800 w-2/4 hover:bg-gray-700  text-slate-400 rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <RiUserSharedFill className="mr-3 w-7 h-7" />

                <div className="text-left">
                  <div className="mb-1 text-xs">Back to signup</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">
                    Sign Up
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      <div id="recaptcha-container"></div>
              {/* {errorMessgae && <p>{errorMessgae}</p>} */}
    </div>
  )
}

export default Signin_Mobile
