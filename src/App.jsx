import './App.css'
import Dashboard from './pages/dashboard'
import Signin from './pages/signin'
import Signup from './pages/signup'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Chat from './components/left_panel/Chat'
import Friends from './components/left_panel/Friends'
import Groups from './components/left_panel/Groups'
import All_Groups from './pages/groups'
import All_Followers from './pages/followers'
import ALL_Friends from './pages/friends'
import Main from './pages'
import All_Request from './pages/request'
import Verfiy from './pages/verify'
import { getAuth } from 'firebase/auth'
import { useState, useEffect } from 'react'
import Profile from './pages/profile'
import ForgotPassword from './pages/forgot_password'
import Signin_Mobile from './pages/signin_mobile/Signin_Mobile'



function App() {
  const auth = getAuth()

  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    try {
      if (!auth.currentUser.emailVerified) {
        setIsAuth(false)
        navigate('/signin')
        // console.log(auth.currentUser.displayName);
      } else {
        setIsAuth(true)
      }
    } catch (error) {
      // console.log(error)
    }
  }, [auth.currentUser])

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="verify" element={<Verfiy />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="signin-mobile" element={<Signin_Mobile />} />
        <Route path="main" element={<Main isUser={isAuth} />}>
          <Route index element={<ALL_Friends />} />
          <Route path="all-friends" element={<ALL_Friends />} />
          <Route path="all-groups" element={<All_Groups />} />
          <Route path="all-followers" element={<All_Followers />} />
          <Route path="all-request" element={<All_Request />} />
          <Route path="profile" element={<Profile />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Chat />} />
            <Route path="chat" element={<Chat />} />
            <Route path="friends" element={<Friends />} />
            <Route path="groups" element={<Groups />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
