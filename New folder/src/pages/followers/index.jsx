import React,{useEffect,useState} from 'react'
import Header from '../../components/header'
import Cards from '../common/Cards'
import Single_Card from '../common/Single_Card'
import { getDatabase, ref, set,onValue,remove,push,child,update } from 'firebase/database'
import {
  getAuth,
} from 'firebase/auth'
import ScreenLoader from '../../components/common/ScreenLoader'
import uuid from 'react-uuid';

const All_Followers = () => {

  const auth = getAuth()

  const db = getDatabase()
  const [followers, setFollowers] = useState([])
  const [loading, setLoading] = useState(false)
  const [sendRequestLoading, setSendRequestLoading] = useState(false)
  


  useEffect(() => {
    setLoading(true)
    const dbRef = ref(db, 'Friends_Request')
    onValue(dbRef, (snapshot) => {

      let request = []
      snapshot.forEach((item)=>{
          if (item.val().request_receiver_id == auth.currentUser.uid) {
            request.push(item.val())
          }
      })

      console.log(request);
      setLoading(false)
     setFollowers(request)
    })
  }, [db])




const removeRequest =(data)=>{

const tasksRef = ref(db,'Friends_Request/' + data.uid);
remove(tasksRef).then(() => {
  console.log("location removed");
});
}

const acceptRequest =(data)=>{
      set(ref(db, 'Friends/' + uuid() ), {
        request_accept_id: auth.currentUser.uid,
        request_accept_name: auth.currentUser.displayName,
        request_accept_email : auth.currentUser.email,
        request_sender_id:data.request_sender_id,
        request_sender_name:data.request_sender_name,
        request_sender_email:data.request_sender_email
      }).then(()=>{
        // set(ref(db, 'Friends/' + uuid() ), {
        //   request_accept_id: data.request_sender_id,
        //   request_accept_name:data.request_sender_name,
        //   request_accept_email : data.request_sender_email,
        //   request_sender_id: auth.currentUser.uid,
        //   request_sender_name: auth.currentUser.displayName,
        //   request_sender_email:auth.currentUser.email
        // })
        setSendRequestLoading("loading done")
        removeRequest(data)
      })
}

  return (
    <div className='main_body'>
    <div className='right_shape'></div>
    <div className='left_shape'></div>
   
    <div className="main_content ">
      {/* header */}
        <Header/>
        <div className="cards">
        {loading ? (
            <ScreenLoader />
          ) : followers ? (
            followers.map((data,index) => (
              <Single_Card
                key={index}
                data={data}
                btn1="Accept"
                btn2="Not Now"
                action = {acceptRequest}
                actionTwo ={removeRequest}
                sendRequestLoading={sendRequestLoading}
              />
            ))
          ) : (
            'No Follower is found!'
          )}
    </div>
    </div>
  </div>
  )
}

export default All_Followers