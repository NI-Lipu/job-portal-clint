import { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import {
   createUserWithEmailAndPassword,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
} from 'firebase/auth'
import auth from '../../firebase/firebase.config/'

// Google Provider
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)

   // Register Users
   const registerUsers = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   // signInUsers
   const signInUsers = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   // GoogleSignIn
   const googleSignIn = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
   }

   // logOut
   const logOut = () => {
      setLoading(true)
      return signOut(auth)
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

   const authInfo = {
      user,
      loading,
      registerUsers,
      signInUsers,
      googleSignIn,
      logOut,
   }
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   )
}

export default AuthProvider
