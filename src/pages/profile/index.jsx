import React from 'react'
import Header from '../../components/header'
import LeftCard from './LeftCard'
import RightCard from './RightCard'

const Profile = () => {
  return (
    <div className="main_body">
      <div className="right_shape"></div>
      <div className="left_shape"></div>

      <div className="main_content">
        {/* header */}
        <Header />
        <div className=" flex gap-3 justify-between m-5">
          <LeftCard />
          <RightCard />
        </div>
      </div>
    </div>
  )
}

export default Profile
