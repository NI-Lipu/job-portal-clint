import { Outlet } from 'react-router-dom'
import Navbar from '../pages/shared/Navbar'

const MainLayout = () => {
   return (
      <div>
         <header className="max-w-7xl mx-auto">
            <Navbar></Navbar>
         </header>
         <Outlet></Outlet>
      </div>
   )
}

export default MainLayout
