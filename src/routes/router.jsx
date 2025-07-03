import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import Register from '../pages/Register/Register'
import SignIn from '../pages/SignIn/SignIn'
import JobDetails from '../pages/JobDetails/JobDetails'
import PrivetRoute from './PrivetRoute'
import JobApply from '../pages/JobApply/JobApply'
import MyApplications from '../pages/MyApplications/MyApplications'
import AddJob from '../pages/AddJob/AddJob'

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
            element: (
               <PrivetRoute>
                  <JobApply></JobApply>
               </PrivetRoute>
            ),
         },
         {
            path: 'myApplications',
            element: (
               <PrivetRoute>
                  <MyApplications></MyApplications>
               </PrivetRoute>
            ),
         },
         {
            path: 'addJob',
            element: (
               <PrivetRoute>
                  <AddJob></AddJob>
               </PrivetRoute>
            ),
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
