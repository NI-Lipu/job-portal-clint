import { useEffect, useState } from 'react'
import JobCard from './JobCard'

const HotJobs = () => {
   const [jobs, setJobs] = useState([])

   useEffect(() => {
      fetch('http://localhost:3000/jobs')
         .then((res) => res.json())
         .then((data) => setJobs(data))
   }, [])

   return (
      <div className="mb-10">
         <div className="text-center space-y-2 mb-8">
            <h2 className="font-bold text-2xl underline">Featured Jobs</h2>
            <p>Know your worth and find the job that qualify your life</p>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {jobs.map((job) => (
               <JobCard key={job._id} job={job}></JobCard>
            ))}
         </div>
      </div>
   )
}

export default HotJobs
