import { easeInOut, motion } from 'motion/react'
import team1 from '../../assets/team/team-1.jpg'
import team2 from '../../assets/team/team-2.jpg'
import CountUpMotion from '../shared/CountUpMotion'

const Banner = () => {
   return (
      <div className="bg-base-200 min-h-[500px] mb-10">
         <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
            <div className="flex-1 mr-32 md:mr-0">
               <motion.img
                  src={team1}
                  animate={{ y: [15, 50, 15] }}
                  transition={{
                     duration: 10,
                     repeat: Infinity,
                     ease: easeInOut,
                  }}
                  className="w-48 md:w-80 rounded-br-[50px] rounded-t-[50px] shadow-2xl border-l-4 md:border-l-8 border-b-4 md:border-b-8 border-sky-400"
               />
               <motion.img
                  src={team2}
                  animate={{ x: [100, 140, 100] }}
                  transition={{
                     duration: 10,
                     repeat: Infinity,
                     ease: easeInOut,
                  }}
                  className="w-48 md:w-80 rounded-br-[50px] rounded-t-[50px] shadow-2xl border-l-4 md:border-l-8 border-b-4 md:border-b-8 border-sky-400"
               />
            </div>
            <motion.div
               initial={{ opacity: 0, y: 100 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, ease: 'easeInOut' }}
               className="flex-1 "
            >
               <h1 className="text-5xl font-bold">15,000+ Browse Jobs</h1>
               <p className="py-6 text-lg">
                  Find Jobs, Employment & Career Opportunities
               </p>
               <div className="grid gap-5 md:gap-16 grid-cols-2 md:grid-cols-4">
                  <p>
                     <CountUpMotion
                        to={97216}
                        duration={3}
                        className="font-bold text-2xl"
                     />
                     <br />
                     <span className="font-medium text-lg">Jobs</span>
                  </p>
                  <p>
                     <CountUpMotion
                        to={4889}
                        duration={3}
                        className="font-bold text-2xl"
                     />{' '}
                     <br />
                     <span className="font-medium text-lg">Members</span>
                  </p>
                  <p>
                     <CountUpMotion
                        to={5500}
                        duration={3}
                        className="font-bold text-2xl"
                     />{' '}
                     <br />
                     <span className="font-medium text-lg">Resume</span>
                  </p>
                  <p>
                     <CountUpMotion
                        to={6800}
                        duration={3}
                        className="font-bold text-2xl"
                     />
                     <br />
                     <span className="font-medium text-lg">Company</span>
                  </p>
               </div>
            </motion.div>
         </div>
      </div>
   )
}

export default Banner
