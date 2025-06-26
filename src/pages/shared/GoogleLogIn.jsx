import { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import AuthContext from '../../context/AuthContext/AuthContext'
import { useNavigate } from 'react-router-dom'

const GoogleLogIn = ({ state }) => {
   // console.log(state)
   const { googleSignIn } = useContext(AuthContext)
   const navigate = useNavigate()

   const handleGoogleLogIn = () => {
      googleSignIn()
         .then((result) => {
            if (state) {
               navigate(`${state}`)
            } else {
               navigate('/')
            }
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
