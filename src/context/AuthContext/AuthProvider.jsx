import { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import {
   createUserWithEmailAndPassword,
   onAuthStateChanged,
} from 'firebase/auth'
import auth from '../../firebase/firebase.config/'

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)

   // Register Users
   const registerUsers = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   // Set Observer
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser)

         setLoading(false)
      })
      return () => {
         unsubscribe()
      }
   }, [])

   const authInfo = { user, loading, registerUsers }
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   )
}

export default AuthProvider
