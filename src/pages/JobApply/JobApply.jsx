import { useParams } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Swal from 'sweetalert2'

const JobApply = () => {
   const { id } = useParams()
   const { user } = useAuth()
   console.log(user)
   const submitJobApply = (e) => {
      e.preventDefault()
      const form = e.target
      const linkedIn = form.linkedIn.value
      const github = form.github.value
      const resume = form.resume.value

      const jobApplication = {
         job_id: id,
         applicant_email: user.email,
         linkedIn,
         github,
         resume,
      }

      fetch('http://localhost:3000/job-applications', {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(jobApplication),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               Swal.fire({
                  title: 'Apply Completed',
                  icon: 'success',
                  draggable: true,
               })
            }
         })
   }
   return (
      <div className="card bg-base-100 shadow-2xl">
         <form onSubmit={submitJobApply} className="card-body gap-5">
            <div className="flex flex-col gap-2">
               <label className="label">
                  <span className="label-text">LinkedIn</span>
               </label>
               <input
                  type="url"
                  name="linkedIn"
                  placeholder="LinkedIn Url"
                  className="input w-3/4 input-bordered"
                  required
               />
            </div>
            <div className="flex flex-col gap-2">
               <label className="label">
                  <span className="label-text">Github</span>
               </label>
               <input
                  type="url"
                  name="github"
                  placeholder="Github Url"
                  className="input w-3/4 input-bordered"
                  required
               />
            </div>
            <div className="flex flex-col gap-2">
               <label className="label">
                  <span className="label-text">Resume</span>
               </label>
               <input
                  type="url"
                  name="resume"
                  placeholder="Resume"
                  className="input w-3/4 input-bordered"
                  required
               />
            </div>
            <div className="form-control mt-6">
               <button className="btn bg-sky-300">Apply</button>
            </div>
         </form>
      </div>
   )
}

export default JobApply
