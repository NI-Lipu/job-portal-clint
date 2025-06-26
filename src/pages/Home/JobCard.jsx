import { GiSkills } from 'react-icons/gi'
import { IoLocationOutline } from 'react-icons/io5'
import salary from '../../assets/icon/salary.png'

const JobCard = ({ job }) => {
   const {
      applicationDeadline,
      category,
      company,
      company_logo,
      description,
      jobType,
      location,
      requirements,
      salaryRange,
      title,
   } = job
   console.log(job)
   return (
      <div className="flex p-5 items-start gap-3 border rounded-md">
         <div>
            <img className="w-16" src={company_logo} alt="" />
         </div>
         <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
               <h3 className="font-bold text-lg">{company}</h3>
               <p className="flex items-center gap-1">
                  <IoLocationOutline />
                  {location}
               </p>
            </div>
            <div>
               <h4>💼 {title}</h4>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
               <GiSkills size={20} color="#3498db" />
               <span className="font-medium">Requirements:</span>
               {requirements.map((skill) => (
                  <p>{skill},</p>
               ))}
            </div>
            <div className="flex items-center gap-1">
               <img className="w-7" src={salary} alt="" />
               <p>
                  ${salaryRange.min} - ${salaryRange.max} / year
               </p>
            </div>
            <div className="flex items-center gap-6">
               <p className="bg-sky-200 rounded-2xl font-medium px-3">
                  {jobType}
               </p>
               <button className="bg-green-300 font-medium rounded-2xl px-3">
                  Apply
               </button>
            </div>
         </div>
      </div>
   )
}

export default JobCard
