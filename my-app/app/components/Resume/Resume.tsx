'use client'

import { useInView } from "framer-motion"
import { useRef } from "react"


function SectionLineUp({ children }: any) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="flex justify-center">
            <span
                className='w-full sm:w-1/4'
                style={{
                    transform: isInView ? "translateY(0)" : "translateY(50px)",
                    transition: 'all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s',
                    opacity: isInView ? 1 : 0
                }}
            >
                {children}
            </span>
        </section>
    )
}


export default function Resume() {



    return (
        <div>

            <SectionLineUp>
                <div className=" border-t border-gray-700 relative flex justify-center mt-40">
                    <span className="absolute top-0  shadow-lg  w-1/5 "></span>
                </div>
            </SectionLineUp>
            <p className="text-white text-center mt-10">Resume</p>


            <div className="w-full lg:w-800p border border-gray-700 mx-auto mt-20 rounded-3xl my-info">

                <div className=" flex   justify-between border-b m-5 border-gray-700 mt-10  py-5">

                    <div className="text-gray-400">
                        <p className="text-3xl text-white">Online Certification in UX Design</p>
                        <p>Coursera (2006 - 2008)</p>
                    </div>

                    <p className="text-gray-400 border border-gray-700 h-fit p-2 bg-black">4.75/5</p>

                </div>

                <div className="text-gray-400 mb-10 p-5" >
                    <p>Successfully finished a comprehensive online UX design certification, emphasizing user-centered methodologies, wireframing, prototyping, and usability testing.</p>
                </div>

            </div>

        </div>
    )
}

