import React, { useState } from 'react'
import UserContext from './userContext'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../config/firebase/FirebaseConfig'

const UserContextProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(false)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setIsUser(true)
    } else {
      setIsUser(false)
    }
  });



  return (
    <UserContext.Provider value={{ isUser, setIsUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider