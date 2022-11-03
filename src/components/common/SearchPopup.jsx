import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineMinus } from 'react-icons/ai'
const SearchPopup = ({ modal, modalClose }) => {


  return (
    modal && (
      <div className="flex justify-center backdrop-blur-sm bg-[#0f172a]/80 absolute w-full h-full z-50 rounded-lg p-4 ">
        <div className="text-black z-50  xs:w-full sm:w-full md:w-4/5 lg:w-4/5 xl-w:2/4 2xl:w-2/4 h-14 rounded-lg bg-[#374151] flex px-4 ">
          <BiSearchAlt size="24px" className=" text-white self-center" />
          <input
            type="text"
            className="w-full h-10 bg-transparent focus:outline-none border-0 outline-none focus:ring-0 self-center text-gray-200"
          />
          <AiOutlineMinus
            size="24px"
            className="text-white self-center bg-slate-600 p-1 cursor-pointer"
            onClick={modalClose}
          />
        </div>
        {/* search result */}
        {/* <div></div> */}
      </div>
    )
  )
}

export default SearchPopup
