import React, { useEffect, useState } from 'react'
import Header from '../../components/header'

import Single_Card from '../common/Single_Card'
import { getDatabase, ref, set,onValue,update,push,child } from 'firebase/database'

import ScreenLoader from '../../components/common/ScreenLoader'
import {
  getAuth,
} from 'firebase/auth'

import uuid from 'react-uuid';

const ALL_Friends = () => {
  
  const auth = getAuth()

  const db = getDatabase()
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(false)
  const [sendRequest, setSendRequest] = useState(false)
  const [followers, setFollowers] = useState([])
  const[btn1, setBtn1]  =useState('')

  useEffect(() => {
    setLoading(true)
    const dbRef = ref(db, 'users/')
    onValue(dbRef, (snapshot) => {
      let users = []
      snapshot.forEach((item) => {
             if(item.key != auth.currentUser.uid){
              console.log(item.val());
                  let obj = {
                    id:item.key,
                    username:item.val().username,
                    email:item.val().email,
                    img:item.val().img,
                  }
              users.push(obj)
             }
      })
      setLoading(false)
      setFriends(users)
    }
    )

  
    const dbRefs = ref(db, 'Friends_Request')
    onValue(dbRefs, (snapshot) => {
      let users = []

      snapshot.forEach((item)=>{
        users.push(item.val())
      })
      setFollowers(users)
    })

  }, [db])







const addRequest =(data)=>{
setBtn1(data.id)
  const generateUid = uuid()
      set(ref(db, 'Friends_Request/' + generateUid), {
        uid:generateUid,
        request_receiver_id: data.id,
        request_receiver_email: data.email,
        request_receiver_name: data.username,
        request_sender_id: auth.currentUser.uid,
        request_sender_name: auth.currentUser.displayName,
        request_sender_email : auth.currentUser.email
      }).then((data)=>{
        setSendRequest(true)
      })

}



console.log(friends);



const actionTwo =()=>{

}

  return (
    <div className="main_body">
      <div className="right_shape"></div>
      <div className="left_shape"></div>

      <div className="main_content">
        {/* header */}
        <Header />
        <div className="cards">
          {loading ? (
            <ScreenLoader />
          ) : friends ? (
            friends.map((data,index) => (
              <Single_Card
                key={index}
                data={data}
                btn1="Add Request"
                btn2="View Profile"
                action = {addRequest}
                actionTwo ={actionTwo}
                sendRequest={sendRequest}
              />
            ))
          ) : (
            'No Friends is found!'
          )}
        </div>
      </div>
    </div>
  )
}

export default ALL_Friends
