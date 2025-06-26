import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import Register from '../pages/Register/Register'
import SignIn from '../pages/SignIn/SignIn'
import JobDetails from '../pages/JobDetails/JobDetails'
import PrivetRoute from './PrivetRoute'

const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
         {
            path: '/',
            element: <Home></Home>,
         },
         {
            path: 'jobs/:id',
            element: (
               <PrivetRoute>
                  <JobDetails></JobDetails>
               </PrivetRoute>
            ),
            loader: ({ params }) =>
               fetch(`http://localhost:3000/jobs/${params.id}`),
         },
         {
            path: 'register',
            element: <Register></Register>,
         },
         {
            path: 'signIn',
            element: <SignIn></SignIn>,
         },
      ],
   },
])

export default router
