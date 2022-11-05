import React, { useState } from 'react'
import { BsFillPhoneVibrateFill } from 'react-icons/bs'
import { RiUserSharedFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PhoneGuestBtn = ({
  btnOneSubTitle,
  btnOneTitle,
  btnTwoSubTitle,
  btnTowTitle,
}) => {
  return (
    <>
      <div className=" relative justify-between items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-4">
        <Link
          to="/signin-mobile"
          className="w-2/4 bg-gray-800 hover:bg-gray-700 focus:ring-0 focus:outline-none focus:ring-gray-300 text-slate-400 rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <BsFillPhoneVibrateFill className="mr-3 w-7 h-7" />
          <div className="text-left">
            <div className="mb-1 text-xs">{btnOneSubTitle}</div>
            <div className="-mt-1 font-sans text-sm font-semibold">
              {btnOneTitle}
            </div>
          </div>
        </Link>

        <Link
          to="/signin"
          className=" bg-gray-800 w-2/4 hover:bg-gray-700  text-slate-400 rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <RiUserSharedFill className="mr-3 w-7 h-7" />

          <div className="text-left">
            <div className="mb-1 text-xs">{btnTwoSubTitle}</div>
            <div className="-mt-1 font-sans text-sm font-semibold">
              {btnTowTitle}
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default PhoneGuestBtn
