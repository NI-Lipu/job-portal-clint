import { useState } from 'react'
import AuthContext from './AuthContext'

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loader, setLoader] = useState(true)

   const authInfo = { user, loader }
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   )
}

export default AuthProvider
