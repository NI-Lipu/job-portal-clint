import { useContext } from 'react'
import AuthContext from '../context/AuthContext/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

const PrivetRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext)
   const location = useLocation()

   if (loading) {
      return 'Loading.....'
   }
   if (user) {
      return children
   }
   return <Navigate to="/signIn" state={location?.pathname}></Navigate>
}

export default PrivetRoute
