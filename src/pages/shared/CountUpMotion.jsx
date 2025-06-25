import { animate } from 'motion'
import { useMotionValue, motion } from 'motion/react'
import { useEffect, useState } from 'react'

const CountUpMotion = ({ from = 0, to, duration, className = '' }) => {
   const count = useMotionValue(from)
   const [display, setDisplay] = useState(from)

   useEffect(() => {
      const controls = animate(count, to, {
         duration,
         ease: 'easeInOut',
         onUpdate: (latest) => setDisplay(Math.floor(latest)),
      })

      return () => controls.stop()
   }, [count, to, duration])

   return (
      <motion.span className={className}>
         {display.toLocaleString()}
      </motion.span>
   )
}

export default CountUpMotion
