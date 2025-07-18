import { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { RiDeleteBin2Line } from 'react-icons/ri'

const MyApplications = () => {
   const { user } = useAuth()
   const [jobs, setJobs] = useState([])

   useEffect(() => {
      fetch(`http://localhost:3000/job-application?email=${user.email}`)
         .then((res) => res.json())
         .then((data) => setJobs(data))
   }, [user.email])
   return (
      <div className="overflow-x-auto my-10">
         <table className="table">
            {/* head */}
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Job Category</th>
                  <th>Salary</th>
                  <th>Delete</th>
               </tr>
            </thead>
            <tbody>
               {/* row 1 */}
               {jobs.map((job) => (
                  <tr key={job._id}>
                     <td>
                        <div className="flex items-center gap-3">
                           <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                 <img
                                    src={job.company_logo}
                                    alt="Avatar Tailwind CSS Component"
                                 />
                              </div>
                           </div>
                           <div>
                              <div className="font-bold">{job.company}</div>
                              <div className="text-sm opacity-50">
                                 {job.location}
                              </div>
                           </div>
                        </div>
                     </td>
                     <td>
                        {job.category}
                        <br />
                        <span className="">Job-Type: {job.jobType}</span>
                     </td>
                     <td>
                        ${job.salaryRange.min} - ${job.salaryRange.max}
                     </td>

                     <th>
                        <button className="btn btn-ghost btn-xs">
                           <RiDeleteBin2Line color="red" size={20} />
                        </button>
                     </th>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default MyApplications
