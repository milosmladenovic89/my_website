'use client'

import { useInView } from "framer-motion"
import { useRef } from "react"



function SectionGridDiv2({ children }: any) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="flex w-full">
            <span
                className='w-full  mx-auto'
                style={{
                    transform: isInView ? "translateY(0)" : "translateY(450px)",
                    transition: 'all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
                    opacity: 1
                }}
            >
                {children}
            </span>
        </section>
    )
}


export default function Pricing() {
    return (
        <div>
            <div className="lg:w-800p xl:w-1200p mx-auto">

                <div className="grid grid-cols-1  xl:grid-cols-3 w-full  mx-auto gap-5 ">

                    <SectionGridDiv2>
                        <div className="border border-gray-700 rounded-2xl  gap-1 h-500p box-grid-div"></div>
                    </SectionGridDiv2>
                    <SectionGridDiv2>
                        <div className="border border-gray-700 rounded-2xl  gap-1  h-500p box-grid-div"></div>
                    </SectionGridDiv2>
                    <SectionGridDiv2>
                        <div className="border border-gray-700 rounded-2xl  gap-1  h-500p box-grid-div"></div>
                    </SectionGridDiv2>

                </div>


            </div>
        </div>
    )
}










