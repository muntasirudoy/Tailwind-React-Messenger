import React from 'react'
import propic from '../../assets/pic.png'
import { BsFillChatDotsFill, BsImage } from 'react-icons/bs'
import { FaUsers, FaUserFriends } from 'react-icons/fa'
import { Outlet, Link } from 'react-router-dom'
const LeftPanel = () => {
  return (
    <div className="w-[30%] h-[100vh] border-r-[1px] border-[#1f2a43] p-4 overflow-hidden xs:hidden sm:hidden md:block lg:block xl:block 2xl:block">
      {/* left panel */}
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

      {/* router outlet for chat, groups. friends*/}
      <Outlet />
    </div>
  )
}

export default LeftPanel
