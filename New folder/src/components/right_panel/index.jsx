import React from 'react'
import propic from '../../assets/pic.png'
import { FaUserFriends } from 'react-icons/fa'
import { RiMapPinUserFill, RiUserSharedFill } from 'react-icons/ri'
const RightPanel = () => {
  return (
    <div className="w-[25%] h-[100vh] border-r-[1px] border-[#1f2a43] xs:hidden sm:hidden md:block lg:block xl:block 2xl:block">
      {/* right panel */}
      <div className="flex flex-col items-center p-4">
        <img src={propic} alt="" className="w-[60px] h-[60px] rounded-full" />
        <h3 className="text-sm font-semibold text-[#afc7ff]">
          Mr. Abul Kashem
        </h3>
        <div className="flex justify-center w-[100%] mt-4 ">
          <span className="text-center">
            <RiMapPinUserFill
              color="#afc7ff"
              fontSize="35px"
              className="box_icon__square"
            />
            <p className=" text-xs text-gray-300">Profile</p>
          </span>
          <span className="text-center">
            <FaUserFriends
              color="#afc7ff"
              fontSize="35px"
              className="box_icon__square"
            />
            <p className=" text-xs text-gray-300">Search</p>
          </span>
          <span className="text-center">
            <RiUserSharedFill
              color="#afc7ff"
              fontSize="35px"
              className="box_icon__square"
            />
            <p className=" text-xs text-gray-300">Mute</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default RightPanel
