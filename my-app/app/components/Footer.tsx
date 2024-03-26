'use client'
import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";



function SectionFooter({ children }: any) {
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


export default function Footer() {

    return (
        <div className="mt-40 text-center">
            <SectionFooter>
                <p className=" text-5xl text-white text-center">Let's chat</p>
            </SectionFooter>


            <span className="border-gray-700 border-t border-b-0 w-1/4 md:w-1/5 mt-40 inline-block text-center"></span>




            <div className="text-white mt-20">
                <Link className="mx-1" href={'/about'}>About</Link>
                <Link className="mx-1" href={'/home'}>Home</Link>
                <Link className="mx-1" href={'/work'}>Work</Link>
            </div>

            <div className="mt-20 text-gray-400">
                <p>© All rights reserved MilosMladenovic</p>
            </div>

        </div>
    )
}
