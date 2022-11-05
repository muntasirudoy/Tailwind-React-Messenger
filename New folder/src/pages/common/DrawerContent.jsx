import React from 'react'
import LeftPanel from '../../components/left_panel'
import { BsFillChatDotsFill, BsImage } from 'react-icons/bs'
import { FaUsers, FaUserFriends } from 'react-icons/fa'
import { Outlet, Link } from 'react-router-dom'
const DrawerContent = () => {
  return (
    <div className="text-white backdrop-blur-xl bg-[#0f172a] h-[100vh] p-4">
      <div className=" w-full h-[40px]">
        <input
          type="text"
          className="input_default w-full h-full"
          placeholder="Search"
        />
      </div>
      <div className="left_box_icon_groups">
        {/* icons */}
        <Link to="chat">
          <BsFillChatDotsFill
            color="#afc7ff"
            fontSize="35px"
            className="box_icon__square"
          />{' '}
        </Link>
        <Link to="friends">
          <FaUserFriends
            color="#afc7ff"
            fontSize="35px"
            className="box_icon__square"
          />
        </Link>
        <Link to="groups">
          <FaUsers
            color="#afc7ff"
            fontSize="35px"
            className="box_icon__square"
          />
        </Link>
      </div>
      <Outlet />
    </div>
  )
}

export default DrawerContent
