import React, { useState } from 'react'

import propic from '../../assets/pic.png'
import logo from '../../assets/logo.png'
import { FaUserFriends } from 'react-icons/fa'
import { RiMapPinUserFill, RiUserSharedFill } from 'react-icons/ri'
import { TbGridDots } from 'react-icons/tb'
import { MdDashboardCustomize } from 'react-icons/md'
import { BiSearchAlt } from 'react-icons/bi'
import { NavLink, useLocation } from 'react-router-dom'
import SearchPopup from '../common/SearchPopup'
import DropDown from '../common/DropDown'
import { getAuth } from 'firebase/auth'

const Header = () => {
  const [activeRoute, setActiveRoute] = useState(false)
  const [modal, setModal] = useState('')
  const [dropDown, setDropDown] = useState('')

  const location = useLocation().pathname
  const auth = getAuth()

  const modalOpen = () => {
    setModal(!modal)
  }
  const modalClose = () => {
    setModal(!modal)
  }
  const dropDownOpen = () => {
    setDropDown(!dropDown)
  }

  return (
    <>
      <div className="px-5 bg-[#0f172a] w-full h-[70px] border-b-[1px] border-[#1f2a43] flex justify-between items-center">
        {/* logo */}
        <div className=" xs:w-[35%] sm:w-[25%]  md:w-[20%]  lg:w-[15%]  xl:w-[15%] 2xl:w-[15%]">
          <img src={logo} alt="logo" className="h-[40px]  " />
        </div>
        {/* menu */}
        <div className="flex  justify-center xs:hidden sm:hidden md:inline-flex lg:inline-flex xl:inline-flex 2xl:inline-flex">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-nav group' : 'inactive-nav group'
            }
            to="/main/dashboard"
          >
            <MdDashboardCustomize
              color="#afc7ff"
              fontSize="35px"
              className=" box_icon__square"
              title="Dashboard"
            />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive || location == '/main'
                ? 'active-nav group'
                : 'inactive-nav group'
            }
            to="/main/all-friends"
          >
            <FaUserFriends
              color="#afc7ff"
              fontSize="35px"
              className=" box_icon__square"
              title="Suggested"
            />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-nav group' : 'inactive-nav group'
            }
            to="/main/all-groups"
          >
            <FaUserFriends
              color="#afc7ff"
              fontSize="35px"
              className=" box_icon__square"
              title="Groups"
            />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-nav group' : 'inactive-nav group'
            }
            to="/main/all-followers"
          >
            <RiUserSharedFill
              color="#afc7ff"
              fontSize="35px"
              className=" box_icon__square"
              title="Followers"
            />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'active-nav group' : 'inactive-nav group'
            }
            to="/main/all-request"
          >
            <RiMapPinUserFill
              color="#afc7ff"
              fontSize="35px"
              className=" box_icon__square"
              title="Request"
            />
          </NavLink>
        </div>
        {/* options */}
        <div className="flex justify-end xs:w-[65%]  sm:w-[75%]  md:w-[80%]  lg:w-[45%]  xl:w-[45%]  2xl:w-[45%]">
          <div className="flex justify-end">
            <BiSearchAlt
              color="#afc7ff"
              fontSize="40px"
              className="box_icon__round__search "
              onClick={modalOpen}
            />
            <TbGridDots
              color="#afc7ff"
              fontSize="40px"
              className="box_icon__round"
              onClick={dropDownOpen}
            />
            <FaUserFriends
              color="#afc7ff"
              fontSize="40px"
              className="box_icon__round"
            />
            <img
              src={auth.currentUser && auth.currentUser.photoURL}
              alt="logo"
              className="h-[35px] w-[35px] rounded-full self-center"
            />
            <p className=" self-center px-2 text-gray-50">
              {auth.currentUser && auth.currentUser.displayName}
            </p>
          </div>
        </div>
      </div>
      <SearchPopup modal={modal} modalClose={modalClose} />
      {dropDown && <DropDown />}
    </>
  )
}

export default Header
