import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AuthContext from '../../context/AuthContext/AuthContext'
import logo from '../../assets/logo.png'

const Navbar = () => {
   const { user, logOut } = useContext(AuthContext)

   // Log-Out funtionaliti
   const handleLogOut = () => {
      logOut()
         .then(() => {
            console.log('log out successful.')
         })
         .catch((error) => {
            console.log(error)
         })
   }
   const links = (
      <>
         {' '}
         <li>
            <NavLink to={'/'}>Home</NavLink>
         </li>
         <li>
            <NavLink to={'/myApplications'}>My-Applications</NavLink>
         </li>
         <li>
            <NavLink to={'/addJob'}>Add-Jobs</NavLink>
         </li>
      </>
   )
   return (
      <div className="navbar bg-base-100">
         <div className="navbar-start">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost md:hidden"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </div>
               <img className="hidden md:block w-14" src={logo} alt="" />
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
               >
                  {links}
               </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">
               Job Portal
            </Link>
         </div>
         <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
         </div>
         <div className="navbar-end gap-4">
            {user ? (
               <button onClick={handleLogOut} className="btn">
                  Log Out
               </button>
            ) : (
               <>
                  <Link to="/register" className="underline">
                     Register
                  </Link>
                  <Link to="/signIn">
                     <button className="btn">Sign In</button>
                  </Link>
               </>
            )}
         </div>
      </div>
   )
}

export default Navbar
