import { Outlet } from 'react-router-dom'
import Navbar from '../pages/shared/Navbar'
import Footer from '../pages/shared/Footer'

const MainLayout = () => {
   return (
      <div>
         <header className="max-w-7xl mx-auto">
            <Navbar></Navbar>
         </header>
         <main className="max-w-7xl min-h-[calc(100vh-296px)] mx-auto">
            <Outlet></Outlet>
         </main>

         <footer className="max-w-7xl mx-auto">
            <Footer></Footer>
         </footer>
      </div>
   )
}

export default MainLayout
