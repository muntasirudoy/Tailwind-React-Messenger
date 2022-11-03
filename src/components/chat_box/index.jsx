import React from 'react'
import propic from '../../assets/pic.png'
import { BsImage } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { ImAttachment } from 'react-icons/im'
const ChatBox = () => {
  return (
    <div className="border-r-[1px]  border-[#1f2a43] relative xs:h-[88vh] sm:h-[88vh] md:h-[88vh] lg:h-[85vh] xl:h-[85vh] 2xl:h-[85vh]  xs:w-[100%] sm:w-[100%] md:w-[45%] lg:w-[45%] xl:w-[45%] 2xl:w-[45%]">
      {/* chat box */}
      <div className="w-full p-3 border-b-[1px] border-[#1f2a43] flex items-center">
        <img
          src={propic}
          alt="profile"
          className="h-[30px] w-[30px] rounded-full mx-4"
        />
        <div className="flex flex-col">
          <h6 className=" font-semibold text-[#afc7ff]">Mr. Abul Kashem</h6>
          <p className=" text-xs text-gray-500 mt-0">Active Now</p>
        </div>
      </div>
      {/* message box */}

<div>
<div className='init-chatbox flex justify-center items-center h-[70vh] flex-col'>
  <div className='w-[80px] h-[80px] rounded-full overflow-hidden bg-white'>

  </div>
  <h1 className=' text-gray-50 text-lg mt-2'>Muntasir Udoy</h1>
  <p className=' text-gray-500 mt-2 text-sm'> You and muntasir both are friend each other </p>
  <p className=' text-gray-500 mt-1 text-sm'> Live in Dhaka </p>
</div>


</div>


      {/* message type */}
      <div className="absolute w-full flex  xs:bottom-0 sm:bottom-0 md:bottom-0 lg:bottom-10 xl:bottom-10 2xl:bottom-10">
        <div className="flex justify-center w-[25%] ">
          <BsImage
            color="#afc7ff"
            fontSize="35px"
            className="box_icon__square"
          />
          <ImAttachment
            color="#afc7ff"
            fontSize="35px"
            className="box_icon__square"
          />
        </div>
        <input
          type="text"
          className="input_default w-[75%] h-[40px]"
          placeholder="Search"
        />
        <FaTelegramPlane
          color="#afc7ff"
          fontSize="35px"
          className="box_icon__square"
        />
      </div>
    </div>
  )
}

export default ChatBox
