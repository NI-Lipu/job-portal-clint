import Swal from 'sweetalert2'
import useAuth from '../../hooks/useAuth'

const AddJob = () => {
   const { user } = useAuth()
   const handleAddJob = (e) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      const data = Object.fromEntries(formData.entries())

      const { min, max, currency, ...newJob } = data
      const salaryRange = { min, max, currency }
      newJob.salaryRange = salaryRange
      newJob.requirements = newJob.requirements.split(';')
      newJob.responsibilities = newJob.responsibilities.split(';')

      // post data to backend
      fetch('http://localhost:3000/jobs', {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(newJob),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               Swal.fire({
                  title: 'Your job has been added.',
                  showClass: {
                     popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `,
                  },
                  hideClass: {
                     popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                    `,
                  },
               })
            }
         })
   }
   return (
      <div>
         <h2 className="text-center font-bold text-xl mt-5">Add a job</h2>
         <form onSubmit={handleAddJob} className="card-body">
            {/* Company Name */}
            <div className="form-control flex flex-col mb-2">
               <label className="label mb-1">
                  <span className="label-text">Company</span>
               </label>
               <input
                  type="text"
                  name="company"
                  placeholder="Your company name"
                  className="input w-full input-bordered"
                  required
               />
            </div>
            {/* Job title */}
            <div className="form-control flex flex-col mb-2">
               <label className="label mb-1">
                  <span className="label-text">Job-Title</span>
               </label>
               <input
                  type="text"
                  name="title"
                  placeholder="job-title"
                  className="input w-full input-bordered"
                  required
               />
            </div>
            {/* Job Location */}
            <div className="form-control flex flex-col mb-2">
               <label className="label mb-1">
                  <span className="label-text">Job-Location</span>
               </label>
               <input
                  type="text"
                  name="location"
                  placeholder="job-location"
                  className="input w-full input-bordered"
                  required
               />
            </div>
            {/* Job Type */}
            <div className="form-control flex flex-col mb-2">
               <label className="label mb-1">
                  <span className="label-text">Job-Type</span>
               </label>
               <select
                  name="jobType"
                  defaultValue="Select a job-type"
                  className="select text-gray-400 select-bordered w-full "
               >
                  <option disabled>Select a job-type</option>
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
               </select>
            </div>
            {/* Job Category */}
            <div className="form-control flex flex-col mb-2">
               <label className="label mb-1">
                  <span className="label-text">Job-Category</span>
               </label>
               <select
                  name="category"
                  defaultValue="Select a job-category"
                  className="select text-gray-400 select-bordered w-full "
               >
                  <option disabled>Select a job-category</option>
                  <option>Full Stack Developer</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Mobile App Developer</option>
               </select>
            </div>
            {/* Application Deadline */}
            <div className="form-control flex flex-col mb-2">
               <label className="label mb-1">
                  <span className="label-text">Application-Deadline</span>
               </label>
               <input
                  type="text"
                  name="applicationDeadline"
                  placeholder="year-month-date"
                  className="input w-full input-bordered"
                  required
               />
            </div>
            {/* Salary Range */}
            <div className="grid grid-cols-1 md:gap-4 md:grid-cols-3 items-end">
               {/* Min  */}
               <div className="form-control flex flex-col mb-2">
                  <label className="label mb-1">
                     <span className="label-text">Salary-Range</span>
                  </label>
                  <input
                     type="number"
                     name="min"
                     placeholder="min"
                     className="input w-full input-bordered"
                     required
                  />
               </div>
               {/* Max  */}
               <div className="form-control flex flex-col mb-2">
                  <input
                     type="number"
                     name="max"
                     placeholder="max"
                     className="input w-full input-bordered"
                     required
                  />
               </div>
               {/* Currency */}
               <div className="form-control flex flex-col mb-2">
                  <select
                     name="currency"
                     defaultValue="Currency"
                     className="select text-gray-400 select-bordered w-full "
                  >
                     <option disabled>Currency</option>
                     <option>BDT</option>
                     <option>USD</option>
                     <option>EUR</option>
                  </select>
               </div>
            </div>
            {/* Description */}
            <div className="form-control flex flex-col mb-2">
               <label className="label mb-1">
                  <span className="label-text">Job-Description</span>
               </label>
               <textarea
                  className="textarea textarea-bordered w-full"
                  name="description"
                  placeholder="Description"
               ></textarea>
            </div>
            {/* Requirements */}
            <div className="form-control flex flex-col mb-2">
               <label className="label mb-1">
                  <span className="label-text">Job-Requirements</span>
               </label>
               <textarea
                  className="textarea textarea-bordered w-full"
                  name="requirements"
                  placeholder="Separate each requirements by semicolon. Ex: javascript; React; etc"
               ></textarea>
            </div>
            {/* Responsibilities */}
            <div className="form-control flex flex-col mb-2">
               <label className="label mb-1">
                  <span className="label-text">Job-Responsibilities</span>
               </label>
               <textarea
                  className="textarea textarea-bordered w-full"
                  name="responsibilities"
                  placeholder="Separate each responsibilities by semicolon. Ex: Write clean, efficient, and well-documented code; Design and implement RESTful APIs; etc"
               ></textarea>
            </div>
            {/* HR Name */}
            <div className="form-control flex flex-col mb-2">
               <label className="label mb-1">
                  <span className="label-text">Hr-Name</span>
               </label>
               <input
                  type="text"
                  name="hr_name"
                  placeholder="hr-name"
                  className="input w-full input-bordered"
                  required
               />
            </div>
            {/* HR Email */}
            <div className="form-control flex flex-col mb-2">
               <label className="label mb-1">
                  <span className="label-text">Hr-Email</span>
               </label>
               <input
                  type="email"
                  defaultValue={user?.email}
                  name="hr_email"
                  placeholder="hr-email"
                  className="input w-full input-bordered"
                  required
               />
            </div>
            {/* Company Logo */}
            <div className="form-control flex flex-col mb-2">
               <label className="label mb-1">
                  <span className="label-text">Company-Logo</span>
               </label>
               <input
                  type="url"
                  name="company_logo"
                  placeholder="logo-url"
                  className="input w-full input-bordered"
                  required
               />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
               <button className="btn w-full bg-sky-300">Submit</button>
            </div>
         </form>
      </div>
   )
}

export default AddJob
