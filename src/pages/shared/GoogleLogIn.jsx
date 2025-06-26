import { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import AuthContext from '../../context/AuthContext/AuthContext'

const GoogleLogIn = () => {
   const { googleSignIn } = useContext(AuthContext)

   const handleGoogleLogIn = () => {
      googleSignIn()
         .then((result) => {
            console.log(result.user)
         })
         .catch((error) => {
            console.log(error.message)
         })
   }
   return (
      <div>
         <div className="divider">OR</div>
         <button className="w-full btn bg-sky-300" onClick={handleGoogleLogIn}>
            <FcGoogle size={30} />
         </button>
      </div>
   )
}

export default GoogleLogIn
