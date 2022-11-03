import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineMinus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const ConfirmationPopup = ({ modal, modalClose }) => {

console.log(modal);
  return (
       <>
         {modal && (
          <div className="flex justify-center backdrop-blur-lg bg-[#0f172a]/90 absolute w-full h-screen items-center z-50 rounded-lg p-4 ">
          <div class="p-10 flex flex-col nax-h-lg max-w-lg bg-[#0f172a] rounded-lg border border-gray-800 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
            <div>
              <svg
                class="mb-2 w-10 h-10 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd"
                ></path>
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
              </svg>
              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-50 dark:text-white">
                  Need to verify your account.
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                We have already sent you a verification link. Please verify your
                account and then login
              </p>
              <span onClick={()=> modalClose()} className=" text-cyan-500">
                Back to login
              </span>
              <span className="text-gray-50 mx-2 text-sm">or</span>
              <Link to="/signin" className=" text-cyan-500">
                Create another account!
              </Link>
            </div>
          </div>
          {/* search result */}
          {/* <div></div> */}
        </div>
         )}
       
       </>

  )
}

export default ConfirmationPopup
