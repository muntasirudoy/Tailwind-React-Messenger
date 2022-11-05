import React,{useEffect,useState} from 'react'
import Person_Card from './Person_Card'
import { motion } from 'framer-motion'
import { container, item } from './helper'
import { getDatabase, ref, set,onValue,remove } from 'firebase/database'
import {
  getAuth,
} from 'firebase/auth'

const Friends = () => {


  const auth = getAuth()

  const db = getDatabase()
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(false)
  const [sendRequestLoading, setSendRequestLoading] = useState(false)
  const [notFound, setNotFound] = useState('')

  useEffect(() => {
    setLoading(true)
    const dbRef = ref(db, 'Friends/')
    onValue(dbRef, (snapshot) => {
      let allfriend = []
      snapshot.forEach((item)=>{
          if (item.val().request_accept_id == auth.currentUser.uid) {
            allfriend.push(item.val())
          }
          else if(item.val().request_sender_id == auth.currentUser.uid){
            let obj ={
                request_accept_id: item.val().request_sender_id,
                request_accept_name:item.val().request_sender_name,
                request_accept_email : item.val().request_sender_email,
                request_sender_id:item.val().request_accept_id,
                request_sender_name:item.val(). request_accept_name,
                request_sender_email:item.val().request_accept_email 
                  }
            allfriend.push(obj)
          }
          else {
            setNotFound("No friend added yet")
          }
      })
      setLoading(false)
      setFriends(allfriend)
    })
  }, [db])

  console.log(friends);

  return (
    <motion.ul
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* number of people card */}
      {
          friends && friends.map((data,index)=>(
            <motion.li key={index} className="item" variants={item}>
                <Person_Card name={data.request_sender_name} msg="Ki obostha tmr" />
            </motion.li>
              ))
      }
    </motion.ul>

  )
}

export default Friends
