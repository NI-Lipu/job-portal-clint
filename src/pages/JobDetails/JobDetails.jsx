import { GiSkills } from 'react-icons/gi'
import { IoLocationOutline } from 'react-icons/io5'
import salary from '../../assets/icon/salary.png'
import { Link } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import { FaRegBookmark } from 'react-icons/fa'

const JobDetails = () => {
   const job = useLoaderData()
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
      _id,
   } = job
   return (
      <div>
         {/* First Part */}
         <div className="md:flex p-5 justify-between items-start bg-[#f5f6fb] gap-3 rounded-md">
            <div className="md:flex gap-7">
               <div>
                  <img
                     className="w-20 mx-auto md:mx-0 md:w-16"
                     src={company_logo}
                     alt=""
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <div className="flex mx-auto md:mx-0 items-center gap-4">
                     <h3 className="font-bold text-lg">{company}</h3>
                     <p className="flex items-center gap-1">
                        <IoLocationOutline />
                        {location}
                     </p>
                  </div>
                  <div className="text-center md:text-left">
                     <h4>💼 {title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-3 items-center">
                     <GiSkills size={20} color="#3498db" />
                     <span className="font-medium">Requirements:</span>
                     {requirements.map((skill, idx) => (
                        <p key={idx}>{skill},</p>
                     ))}
                  </div>
                  <div className="flex mx-auto md:mx-0 items-center gap-1">
                     <img className="w-7" src={salary} alt="" />
                     <p>
                        ${salaryRange.min} - ${salaryRange.max} / year
                     </p>
                  </div>
                  <div className="flex items-center gap-6">
                     <p className="bg-sky-200 rounded-2xl mx-auto md:mx-0 font-medium px-3">
                        {jobType}
                     </p>
                  </div>
               </div>
            </div>
            <div>
               <p className="mb-5 text-center">
                  Application ends:{' '}
                  <span className="text-red-400 font-bold">
                     {applicationDeadline}
                  </span>
               </p>
               <div className="flex justify-center md:justify-start gap-5">
                  <Link to={`/jobApply/${_id}`}>
                     <button className="bg-green-300 font-medium rounded-xl py-3 px-4">
                        Apply Now
                     </button>
                  </Link>
                  <button>
                     <FaRegBookmark size={30} />
                  </button>
               </div>
            </div>
         </div>

         {/* Second Part */}
         <div className="px-2 2xl:px-0 my-5 md:my-10">
            {/* job Description */}
            <div>
               <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Job Description
               </h3>
               <p>{description}</p>
            </div>
            {/* Responsibilities */}
            <div className="my-6">
               <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Key Responsibilities
               </h3>
               <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>
                     Be involved in every step of the product design cycle from
                     discovery to developer handoff and user acceptance testing.
                  </li>
                  <li>
                     Work with BAs, product managers and tech teams to lead the
                     Product Design
                  </li>
                  <li>
                     Maintain quality of the design process and ensure that when
                     designs are translated into code they accurately reflect
                     the design specifications.
                  </li>
                  <li>
                     Accurately estimate design tickets during planning
                     sessions.
                  </li>
                  <li>
                     Contribute to sketching sessions involving
                     non-designersCreate, iterate and maintain UI deliverables
                     including sketch files, style guides, high fidelity
                     prototypes, micro interaction specifications and pattern
                     libraries.
                  </li>
               </ul>
            </div>

            {/* Skill and Experience */}
            <div className="my-6">
               <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Skill & Experience
               </h3>
               <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
                  <li>
                     You have at least 3 years’ experience working as a Product
                     Designer.
                  </li>
                  <li>
                     You have experience using Sketch and InVision or Framer X
                  </li>
                  <li>
                     You have some previous experience working in an agile
                     environment – Think two-week sprints.
                  </li>
                  <li>
                     You are familiar using Jira and Confluence in your workflow
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default JobDetails
