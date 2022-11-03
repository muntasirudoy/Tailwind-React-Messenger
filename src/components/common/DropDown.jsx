import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { MdSettings } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { getAuth, signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

const DropDown = () => {
  const navigate = useNavigate()
  const userSignOut = () => {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        navigate('/signin')
      })
      .catch((error) => {
        // An error happened.
      })
  }

  return (
    <div
      id="dropdownDots"
      className="z-10 w-44 bg-gray-700 rounded divide-y  divide-gray-100 shadow absolute right-10"
    >
      <ul
        className="py-1 text-sm text-gray-50 "
        aria-labelledby="dropdownMenuIconButton"
      >
        <li>
          <Link to="/main/profile">
            <span
              href="#"
              className=" cursor-pointer py-2 px-4 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-1"
            >
              <CgProfile /> Your Profile
            </span>
          </Link>
        </li>
        <li>
          <span
            href="#"
            className=" cursor-pointer py-2 px-4 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-1"
          >
            <MdSettings /> Settings
          </span>
        </li>
        <li>
          <span
            href="#"
            className=" cursor-pointer py-2 px-4 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white flex items-center gap-1"
            onClick={userSignOut}
          >
            <BiLogOut /> Logout
          </span>
        </li>
      </ul>
    </div>
  )
}

export default DropDown
