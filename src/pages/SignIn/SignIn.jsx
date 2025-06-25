import Lottie from 'lottie-react'
import registerLottieAnimation from '../../assets/lottie/register.json'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext/AuthContext'

const SignIn = () => {
   const { signInUsers } = useContext(AuthContext)
   const handleSignIn = (e) => {
      e.preventDefault()
      const form = e.target
      const email = form.email.value
      const password = form.password.value

      signInUsers(email, password)
         .then((result) => {
            const user = result.user
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
                     <button className="btn btn-primary">Sign In</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default SignIn
