'use client'
import Image from 'next/image'
import ImageOfMe from '../../public/images/S-Profile-Image-BG-1.png'
import { useRef } from 'react'
import { useInView } from 'framer-motion'





function SectionText0({ children }: any) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="flex overflow-hidden w-full h-full  items-center justify-center mt-20">
            <span
                className='w-full 2xl:w-2/3 h-3/4'
                style={{

                    transform: isInView ? "translateY(0)" : "translateY(20%)",
                    transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s',
                    opacity: isInView ? 1 : 0
                }}
            >
                {children}
            </span>
        </section>
    )
}

export default function MyInfo() {
    return (
        <SectionText0>
            <div className='border border-gray-700  rounded-2xl h-fit xl:h-full w-full flex flex-col xl:justify-between items-center xl:flex-row-reverse my-background'>

                <div className='rounded-xl pt-12' >
                    <Image alt='my img' src={ImageOfMe} />
                </div>


                <div className=' h-full w-full xl:w-1/2 p-2 sm:p-10 flex flex-col justify-evenly'>
                    <h1 className='text-white underline decoration-gray-700 decoration-1 underline-offset-8 text-2xl my-5'>Frontend Developer</h1>
                    <div>
                        <p className='text-5xl xl:text-7xl text-white mt-10'>H'i I'm Milos</p>
                        <p className=' text-gray-400 mt-10'>A creative Frontend Developer with a focus on crafting engaging, intuitive user experiences. One years of experience, collaborating with diverse teams to create user-centered solutions for diverse platforms and industries.
                        </p>
                    </div>

                    <div className='flex justify-items-start my-10 md:my-20'>
                        <p className='border border-gray-700 p-1 rounded-2xl flex items-center hover:bg-gray-700 hover:scale-95 transition ease-in-out duration-300'>
                            <span className="material-symbols-outlined text-3xl  text-gray-400 py-3 px-4 ">
                                contact_mail
                            </span>
                        </p>

                        <p className='border border-gray-700 p-1 flex items-center rounded-2xl mx-2  hover:bg-gray-700 hover:scale-95 transition ease-in-out duration-300'>
                            <span className="material-symbols-outlined text-3xl  text-gray-400 py-3 px-4">
                                sports_baseball
                            </span>
                        </p>

                        <p className='border border-gray-700 p-1 flex items-center rounded-2xl hover:bg-gray-700 hover:scale-95 transition ease-in-out duration-300'>
                            <span className="material-symbols-outlined text-3xl  text-gray-400 py-3 px-4">
                                psychology
                            </span>
                        </p>

                    </div>

                </div>

            </div>
        </SectionText0>
    )
}
