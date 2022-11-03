import React from 'react'
import PhoneGuestBtn from '../../pages/common/PhoneGuestBtn'

const PhoneVerifyPopup = () => {
  return (
    <div className="flex flex-col items-center backdrop-blur-md bg-[#0f172a]/90 absolute w-full left-0 top-0 h-full z-150 rounded-lg p-4 pt-4">
      <div className="w-full">
        <h1 className=" text-gray-50 text-2xl font-semibold mt-10 text-center">
          Login with Phone Number
        </h1>
      </div>
      <div className="w-full p-10">
        <label
          for="phone"
          class="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-300"
        >
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="123-45-678"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
        />
        <button type="submit" className="form_submit_btn">
          {' '}
          Sign In
        </button>
      </div>
      <div className="w-4/5 justify-self-end">
        <PhoneGuestBtn
          btnOneSubTitle="Back to"
          btnOneTitle="Login"
          btnTwoSubTitle="Back to"
          btnTowTitle="Signup"
          linkOne="/signin"
          linkTwo="/signup"
        />
      </div>
    </div>
  )
}

export default PhoneVerifyPopup
