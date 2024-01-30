'use client'
import Image from 'next/image'
import ImageOfMe from '../../public/images/S-Profile-Image-BG-1.png'
import { useRef } from 'react'
import { useInView } from 'framer-motion'





function SectionText0({ children }: any) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="flex overflow-hidden w-full h-full  items-center justify-center ">
            <span
                className='w-full xl:w-2/3 h-3/4'
                style={{

                    transform: isInView ? "translateY(0)" : "translateY(50%)",
                    transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s',
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
            <div className='border border-gray-400  rounded-2xl h-fit xl:h-full w-full flex flex-col xl:justify-between items-center xl:flex-row-reverse '>

                <div className='rounded-xl pt-12' >
                    <Image alt='my img' src={ImageOfMe} />
                </div>


                <div className=' h-full w-full xl:w-1/2 p-2 sm:p-10 flex flex-col justify-evenly'>
                    <h1 className='text-white underline underline-offset-8 text-2xl my-5'>Frontend Developer</h1>
                    <div>
                        <p className='text-xl sm:text-3xl text-white'>H'i I'm Milos</p>
                        <p className=' text-white'>A creative Frontend Developer with a focus on crafting engaging, intuitive user experiences. One years of experience, collaborating with diverse teams to create user-centered solutions for diverse platforms and industries.
                        </p>
                    </div>

                    <div className='flex justify-items-start'>
                        <span className="material-symbols-outlined text-3xl sm:text-7xl text-gray-400 p-2">
                            contact_mail
                        </span>
                        <span className="material-symbols-outlined text-3xl sm:text-7xl text-gray-400 p-2">
                            sports_baseball
                        </span>
                        <span className="material-symbols-outlined text-3xl sm:text-7xl text-gray-400 p-2">
                            psychology
                        </span>
                    </div>

                </div>

            </div>
        </SectionText0>
    )
}
