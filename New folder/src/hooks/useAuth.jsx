import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useAuth = (currentUser) => {
  const [isAuth, setIsAuth] = useState(false)

  const navigate = useNavigate()
  if (currentUser) {
    setIsAuth(true)
    navigate('/main')
  } else {
    setIsAuth(false)
    navigate('/signin')
  }
  return [isAuth]
}

export default useAuth
