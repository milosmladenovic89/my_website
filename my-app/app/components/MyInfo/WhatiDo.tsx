'use client'

import { useInView } from "framer-motion"
import { useRef } from "react"
import computer from '../../../public/images/computer.svg'
import ux from '../../../public/images/ux.svg'
import responsive from '../../../public/images/responsive.svg'
import code from '../../../public/images/code.svg'
import settings from '../../../public/images/settings.svg'
import search from '../../../public/images/search.svg'
import Image from "next/image"


function SectionLineUp({ children }: any) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="flex justify-center">
            <span
                className='w-full sm:w-1/4'
                style={{
                    transform: isInView ? "translateY(0)" : "translateY(400px)",
                    transition: 'all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
                    opacity: isInView ? 1 : 0.5
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
                    transform: isInView ? "translateY(0)" : "translateY(450px)",
                    transition: 'all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
                    opacity: isInView ? 1 : 0.5
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

                        <div className="div-box-whatIdo border border-gray-700 rounded-2xl group  gap-1  h-80 box-grid-div p-10  duration-500 ease-in-out hover:border-gray-400">

                            <div className="flex justify-between flex-col h-full  duration-500 ease-in-out group-hover:-translate-y-2">
                                <Image src={computer} alt="computer" width={50} height={50} />
                                <p className="text-white text-2xl ">UI Design</p>
                                <p className="text-gray-400 text-sm sm:text-base tracking-wider"> Craft visually appealing and consistent user interfaces that align with brand guidelines, including style guides.</p>
                            </div>


                        </div>
                    </SectionGridDiv>

                    <SectionGridDiv>
                        <div className="div-box-whatIdo border border-gray-700 rounded-2xl group  gap-1  h-80 box-grid-div p-10  duration-500 ease-in-out hover:border-gray-400">

                            <div className="flex justify-between flex-col h-full  duration-500 ease-in-out group-hover:-translate-y-2">
                                <Image src={ux} alt="computer" width={50} height={50} />
                                <p className="text-white text-2xl ">Ux Design</p>
                                <p className="text-gray-400 text-sm sm:text-base tracking-wider">Turning applications into something that people enjoy using.Developing wireframes and task flows based on user needs.</p>
                            </div>


                        </div>
                    </SectionGridDiv>
                    <SectionGridDiv>
                        <div className="div-box-whatIdo border border-gray-700 rounded-2xl group  gap-1  h-80 box-grid-div p-10  duration-500 ease-in-out hover:border-gray-400">

                            <div className="flex justify-between flex-col h-full  duration-500 ease-in-out group-hover:-translate-y-2">
                                <Image src={responsive} alt="computer" width={50} height={50} />
                                <p className="text-white text-2xl ">Responsive design</p>
                                <p className="text-gray-400 text-sm sm:text-base tracking-wider"> Build applications that adapt and work well across different devices and screen sizes.</p>
                            </div>


                        </div>
                    </SectionGridDiv>
                    <SectionGridDiv>
                        <div className="div-box-whatIdo border border-gray-700 rounded-2xl group  gap-1  h-80 box-grid-div p-10  duration-500 ease-in-out hover:border-gray-400">

                            <div className="flex justify-between flex-col h-full  duration-500 ease-in-out group-hover:-translate-y-2">
                                <Image src={code} alt="computer" width={50} height={50} />
                                <p className="text-white text-2xl ">Code management</p>
                                <p className="text-gray-400 text-sm sm:text-base tracking-wider">Write well-structured code that is easy to maintain and understand.</p>
                            </div>


                        </div>
                    </SectionGridDiv>
                    <SectionGridDiv>
                        <div className="div-box-whatIdo border border-gray-700 rounded-2xl group  gap-1  h-80 box-grid-div p-10  duration-500 ease-in-out hover:border-gray-400">

                            <div className="flex justify-between flex-col h-full  duration-500 ease-in-out group-hover:-translate-y-2">
                                <Image src={settings} alt="computer" width={50} height={50} />
                                <p className="text-white text-2xl ">Maintain website</p>
                                <p className="text-gray-400 text-sm sm:text-base tracking-wider"> Keeping a website up-to-date and running smoothly as well as performing optimally.</p>
                            </div>


                        </div>
                    </SectionGridDiv>
                    <SectionGridDiv>
                        <div className="div-box-whatIdo border border-gray-700 rounded-2xl group  gap-1  h-80 box-grid-div p-10  duration-500 ease-in-out hover:border-gray-400">

                            <div className="flex justify-between flex-col h-full  duration-500 ease-in-out group-hover:-translate-y-2">
                                <Image src={search} alt="computer" width={50} height={50} />
                                <p className="text-white text-2xl ">SEO</p>
                                <p className="text-gray-400 text-sm sm:text-base tracking-wider">Optimizing your site for SEO makes it easier for internet searchers to find your content, products, and services..</p>
                            </div>

                        </div>
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

                <div className="grid grid-cols-1  xl:grid-cols-3 w-full  mx-auto gap-5 mt-40">

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
