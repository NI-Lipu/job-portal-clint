import Lottie from 'lottie-react'
import registerLottieAnimation from '../../assets/lottie/register.json'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext/AuthContext'
import GoogleLogIn from '../shared/GoogleLogIn'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const SignIn = () => {
   const { signInUsers } = useContext(AuthContext)
   const { state } = useLocation()
   const navigate = useNavigate()
   // console.log(state)
   const handleSignIn = (e) => {
      e.preventDefault()
      const form = e.target
      const email = form.email.value
      const password = form.password.value

      signInUsers(email, password)
         .then((result) => {
            const user = result.user
            if (state) {
               navigate(`${state}`)
            }
            console.log(user)
         })
         .catch((error) => {
            const errorMessage = error.message
            console.log(errorMessage)
         })
      console.log(email, password)
   }
   return (
      <div className="hero bg-base-200">
         <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
               <Lottie animationData={registerLottieAnimation}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
               <h1 className="text-5xl font-bold ml-5 mt-4">Sign In Now!</h1>
               <form onSubmit={handleSignIn} className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                     />
                  </div>
                  <div className="form-control mt-6">
                     <button className="btn bg-sky-300 w-full">Sign In</button>
                  </div>
                  <GoogleLogIn state={state}></GoogleLogIn>
               </form>
               <div className="text-center mb-5">
                  <p>
                     Don't you have an account?{' '}
                     <Link
                        className="text-lg underline font-medium text-sky-600"
                        to={'/register'}
                     >
                        Register
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SignIn
