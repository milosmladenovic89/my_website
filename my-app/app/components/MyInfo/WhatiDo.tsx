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
                    transition: 'all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                    opacity: isInView ? 1 : 0
                }}
            >
                {children}
            </span>
        </section>
    )
}

function SectionGridDiv({ children }: any) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="flex w-full">
            <span
                className='w-full sm:w-2/3 md:w-full mx-auto'
                style={{
                    transform: isInView ? "translateY(0)" : "translateY(50px)",
                    transition: 'all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                    opacity: isInView ? 1 : 0
                }}
            >
                {children}
            </span>
        </section>
    )
}

function SectionGridDiv2({ children }: any) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="flex w-full">
            <span
                className='w-full  mx-auto'
                style={{
                    transform: isInView ? "translateY(0)" : "translateY(50px)",
                    transition: 'all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
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

            <SectionGridDiv>
                <p className="text-5xl text-white text-center mt-10">What i Do</p>
            </SectionGridDiv>


            <div className=" lg:w-800p xl:w-1200p mx-auto">


                <div className="grid  sm:grid-cols-1 md:grid-cols-2   xl:grid-cols-3    mx-auto gap-5 mt-40 ">

                    <SectionGridDiv>
                        <div className="border border-gray-700 rounded-2xl  gap-1  h-80 box-grid-div"></div>
                    </SectionGridDiv>
                    <SectionGridDiv>
                        <div className="border border-gray-700 rounded-2xl  gap-1  h-80 box-grid-div"></div>
                    </SectionGridDiv>
                    <SectionGridDiv>
                        <div className="border border-gray-700 rounded-2xl  gap-1  h-80 box-grid-div"></div>
                    </SectionGridDiv>
                    <SectionGridDiv>
                        <div className="border border-gray-700 rounded-2xl  gap-1  h-80 box-grid-div"></div>
                    </SectionGridDiv>
                    <SectionGridDiv>
                        <div className="border border-gray-700 rounded-2xl  gap-1  h-80 box-grid-div"></div>
                    </SectionGridDiv>
                    <SectionGridDiv>
                        <div className="border border-gray-700 rounded-2xl  gap-1  h-80 box-grid-div"></div>
                    </SectionGridDiv>

                </div>
            </div>


            <SectionLineUp>
                <div className=" border-t border-gray-700 relative flex justify-center mt-40">
                    <span className="absolute top-0 border-t border-white  shadow-lg  w-1/5 top-border "></span>
                </div>
            </SectionLineUp>

            <SectionGridDiv>
                <p className=" text-center text text-5xl text-white mt-10">My Projects</p>
            </SectionGridDiv>


            <div className="lg:w-800p xl:w-1200p mx-auto">

                <div className="grid grid-cols-1  xl:grid-cols-3 w-full  mx-auto gap-5 mt-40 ">

                    <SectionGridDiv2>
                        <div className="border border-gray-700 rounded-2xl  gap-1  h-96 box-grid-div"></div>
                    </SectionGridDiv2>
                    <SectionGridDiv2>
                        <div className="border border-gray-700 rounded-2xl  gap-1  h-96 box-grid-div"></div>
                    </SectionGridDiv2>
                    <SectionGridDiv2>
                        <div className="border border-gray-700 rounded-2xl  gap-1  h-96 box-grid-div"></div>
                    </SectionGridDiv2>

                </div>


            </div>

            <div className="w-full  text-center mt-20">
                <SectionGridDiv2>
                    <p className=" inline-block  bg-gray-700 hover:bg-gray-500 hover:cursor-pointer text-white  w-fit text-center border border-gray-700 rounded-md p-2"> View all projects</p>
                </SectionGridDiv2>
            </div>



        </div>
    )
}
