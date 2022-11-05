import React, { useState } from 'react'
import propic from '../../assets/pic.png'
import { BiHide } from 'react-icons/bi'
const Person_Card = ({ ids, name, msg }) => {
  const [hide, setHide] = useState()

  const handleHide = (e) => {
    setHide(e)
  }

  return (
    <>
      <div className=" w-full flex mt-4 cursor-pointer group">
        <picture className="relative">
          <img
            className="w-[37px] h-[37px] opacity-70"
            src={propic}
            alt="profile"
          />
          <span className="online"></span>
        </picture>
        <div className="flex justify-between w-full relative">
          <div className="flex flex-col ml-3">
            <h5 className="text-sm font-semibold text-[#afc7ff]">{name}</h5>
            <p className=" text-xs text-gray-500">{msg}</p>
          </div>
          <div className=" text-right">
            <p className=" text-xs text-gray-500">15 min ago</p>
          </div>
          <BiHide
            className="absolute top-5 right-0 text-white"
            onClick={() => handleHide(ids)}
          ></BiHide>
        </div>
      </div>
    </>
  )
}

export default Person_Card
