import { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import auth from '../../firebase/firebase.config/'

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true)

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

   const authInfo = { user, loading }
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   )
}

export default AuthProvider
