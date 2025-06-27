import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import Register from '../pages/Register/Register'
import SignIn from '../pages/SignIn/SignIn'
import JobDetails from '../pages/JobDetails/JobDetails'
import PrivetRoute from './PrivetRoute'
import JobApply from '../pages/JobApply/JobApply'

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
            path: 'jobApply/:id',
            element: <JobApply></JobApply>,
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
