'use client'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";





function SectionLogo({ children }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section ref={ref} className="flex  items-center justify-center">
      <span
        className='w-full'
        style={{
          transform: isInView ? "translateY(0)" : "translateY(-70px)",
          transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          opacity: isInView ? 1 : 0
        }}
      >
        {children}
      </span>
    </section>
  )
}


const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(100,100,100, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(100,100,100, 0)"
  }
};

export const MyLogo = () => (


  <SectionLogo>
    <div className="flex w-16 h-16 md:w-24 md:h-24 place-content-center overflow-hidden rounded-3xl container-logo ">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="item-logo w-1/2 overflow-visible stroke-gray-400 stroke-1"
      >
        <motion.path
          d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1,
            duration: 2,


          }}
        />
      </motion.svg>
    </div>
  </SectionLogo>

);
