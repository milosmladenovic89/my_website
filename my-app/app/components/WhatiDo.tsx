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
                    transform: isInView ? "translateY(0)" : "translateY(400px)",
                    transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                    opacity: isInView ? 1 : 0
                }}
            >
                {children}
            </span>
        </section>
    )
}

export default function WhatiDo() {
    return (
        <div>
            <SectionLineUp>
                <div className=" border-t border-gray-700 relative flex justify-center">
                    <span className="absolute top-0 border-t border-white  shadow-lg  w-1/5 top-border "></span>
                </div>
            </SectionLineUp>
        </div>
    )
}
