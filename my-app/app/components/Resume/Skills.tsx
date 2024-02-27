'use client'

import { animate, useInView, useMotionValue, useTransform, motion } from 'framer-motion';
import { useEffect, useRef } from "react"



function SectionSkillsHTML({ children }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 'all' })
  return (
    <section ref={ref} className="flex ">
      <span
        className='h-2'

        style={{
          width: isInView ? "95%" : "0%",
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

function SectionSkillsCSS({ children }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 'all' })
  return (
    <section ref={ref} className="flex ">
      <span
        className='h-2'

        style={{
          width: isInView ? "94%" : "0%",
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

function SectionSkillsJS({ children }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 'all' })
  return (
    <section ref={ref} className="flex ">
      <span
        className='h-2'

        style={{
          width: isInView ? "87%" : "0%",
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

function SectionSkillsReact({ children }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 'all' })
  return (
    <section ref={ref} className="flex ">
      <span
        className='h-2'

        style={{
          width: isInView ? "85%" : "0%",
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

function SectionSkillsNextJs({ children }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 'all' })
  return (
    <section ref={ref} className="flex ">
      <span
        className='h-2'

        style={{
          width: isInView ? "84%" : "0%",
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

function SectionSkillsAdobe({ children }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 'all' })
  return (
    <section ref={ref} className="flex ">
      <span
        className='h-2'

        style={{
          width: isInView ? "64%" : "0%",
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}


function SectionSkillsPhotoShop({ children }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 'all' })
  return (
    <section ref={ref} className="flex ">
      <span
        className='h-2'

        style={{
          width: isInView ? "64%" : "0%",
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

function SectionSkillsTailwind({ children }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 'all' })
  return (
    <section ref={ref} className="flex ">
      <span
        className='h-2'

        style={{
          width: isInView ? "90%" : "0%",
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

function SectionSkillsFramer({ children }: any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 'all' })
  return (
    <section ref={ref} className="flex ">
      <span
        className='h-2'

        style={{
          width: isInView ? "88%" : "0%",
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

export default function Skills() {

  const ref = useRef(null)
  const isInView = useInView(ref, { amount: "all" })
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)

  const ref2 = useRef(null)
  const isInView2 = useInView(ref2, { amount: "all" })
  const count2 = useMotionValue(0)
  const rounded2 = useTransform(count2, Math.round)


  const ref3 = useRef(null)
  const isInView3 = useInView(ref3, { amount: "all" })
  const count3 = useMotionValue(0)
  const rounded3 = useTransform(count3, Math.round)

  const ref4 = useRef(null)
  const isInView4 = useInView(ref4, { amount: "all" })
  const count4 = useMotionValue(0)
  const rounded4 = useTransform(count4, Math.round)

  const ref5 = useRef(null)
  const isInView5 = useInView(ref5, { amount: "all" })
  const count5 = useMotionValue(0)
  const rounded5 = useTransform(count5, Math.round)

  const ref6 = useRef(null)
  const isInView6 = useInView(ref6, { amount: "all" })
  const count6 = useMotionValue(0)
  const rounded6 = useTransform(count6, Math.round)

  const ref7 = useRef(null)
  const isInView7 = useInView(ref7, { amount: "all" })
  const count7 = useMotionValue(0)
  const rounded7 = useTransform(count7, Math.round)

  const ref8 = useRef(null)
  const isInView8 = useInView(ref8, { amount: "all" })
  const count8 = useMotionValue(0)
  const rounded8 = useTransform(count8, Math.round)

  const ref9 = useRef(null)
  const isInView9 = useInView(ref9, { amount: "all" })
  const count9 = useMotionValue(0)
  const rounded9 = useTransform(count9, Math.round)

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, 85, { duration: 0.9, delay: 0.5 })
      return animation.cancel
    }
  }, [count, isInView])

  useEffect(() => {
    if (isInView2) {
      const animation2 = animate(count2, 95, { duration: 0.9, delay: 0.5 })
      return animation2.cancel
    }
  }, [count2, isInView2])

  useEffect(() => {
    if (isInView3) {
      const animation3 = animate(count3, 84, { duration: 0.9, delay: 0.5 })
      return animation3.cancel
    }
  }, [count3, isInView3])


  useEffect(() => {
    if (isInView4) {
      const animation4 = animate(count4, 64, { duration: 0.9, delay: 0.5 })
      return animation4.cancel
    }
  }, [count4, isInView4])

  useEffect(() => {
    if (isInView5) {
      const animation5 = animate(count5, 87, { duration: 0.9, delay: 0.5 })
      return animation5.cancel
    }
  }, [count5, isInView5])

  useEffect(() => {
    if (isInView6) {
      const animation6 = animate(count6, 94, { duration: 0.9, delay: 0.5 })
      return animation6.cancel
    }
  }, [count6, isInView6])

  useEffect(() => {
    if (isInView7) {
      const animation7 = animate(count7, 64, { duration: 0.9, delay: 0.5 })
      return animation7.cancel
    }
  }, [count7, isInView7])

  useEffect(() => {
    if (isInView8) {
      const animation8 = animate(count8, 90, { duration: 0.9, delay: 0.5 })
      return animation8.cancel
    }
  }, [count8, isInView8])

  useEffect(() => {
    if (isInView9) {
      const animation9 = animate(count9, 88, { duration: 0.9, delay: 0.5 })
      return animation9.cancel
    }
  }, [count9, isInView9])


  return (
    <div>
      <p className=" text-2xl text-white mt-40">Skills</p>

      <div className="w-full lg:w-800p mx-auto">


        <div className="my-10">


          <div className="flex justify-between my-1 pr-4 relative">

            <p className=" text-gray-400">React</p>
            <motion.p className=" text-gray-400" ref={ref}>{rounded}</motion.p>
            <span className='text-gray-400 absolute right-0 t-0'>%</span>

          </div>

          <div className="w-full h-2  bg-gray-700">
            <SectionSkillsReact>
              <p className=" bg-for-skills  h-full"></p>
            </SectionSkillsReact>
          </div>
        </div>



        <div className="my-10">
          <div className="flex justify-between relative pr-4 my-1">
            <p className=" text-gray-400">HTML</p>
            <motion.p className=" text-gray-400" ref={ref2}>{rounded2}</motion.p>
            <span className='text-gray-400 absolute right-0 t-0'>%</span>
          </div>

          <div className="w-full h-2  bg-gray-700">
            <SectionSkillsHTML>
              <p className="bg-for-skills   h-full"></p>
            </SectionSkillsHTML>
          </div>
        </div>



        <div className="my-10">
          <div className="flex justify-between  pr-4 relative my-1">
            <p className=" text-gray-400">NextJs</p>
            <motion.p className=" text-gray-400" ref={ref3}>{rounded3}</motion.p>
            <span className='text-gray-400 absolute right-0 t-0'>%</span>
          </div>

          <div className="w-full h-2  bg-gray-700">
            <SectionSkillsNextJs>
              <p className=" bg-for-skills  h-full"></p>
            </SectionSkillsNextJs>
          </div>
        </div>

        <div className="my-10">
          <div className="flex justify-between pr-4 relative my-1">
            <p className=" text-gray-400">Adobe Illustrator</p>
            <motion.p className=" text-gray-400" ref={ref4}>{rounded4}</motion.p>
            <span className='text-gray-400 absolute right-0 t-0'>%</span>
          </div>

          <div className="w-full h-2  bg-gray-700">
            <SectionSkillsAdobe>
              <p className=" bg-for-skills  h-full"></p>
            </SectionSkillsAdobe>
          </div>
        </div>


        <div className="my-10">
          <div className="flex justify-between relative pr-4 my-1">
            <p className=" text-gray-400">JavaScript</p>
            <motion.p className=" text-gray-400" ref={ref5}>{rounded5}</motion.p>
            <span className='text-gray-400 absolute right-0 t-0'>%</span>
          </div>

          <div className="w-full h-2  bg-gray-700">
            <SectionSkillsJS>
              <p className=" bg-for-skills  h-full"></p>
            </SectionSkillsJS>
          </div>
        </div>



        <div className="my-10">
          <div className="flex justify-between relative pr-4 my-1">
            <p className=" text-gray-400">CSS</p>
            <motion.p className=" text-gray-400" ref={ref6}>{rounded6}</motion.p>
            <span className='text-gray-400 absolute right-0 t-0'>%</span>
          </div>

          <div className="w-full h-2  bg-gray-700">
            <SectionSkillsCSS>
              <p className=" bg-for-skills  h-full"></p>
            </SectionSkillsCSS>
          </div>
        </div>


        <div className="my-10">
          <div className="flex justify-between relative pr-4 my-1">
            <p className=" text-gray-400">PhotoShop</p>
            <motion.p className=" text-gray-400" ref={ref7}>{rounded7}</motion.p>
            <span className='text-gray-400 absolute right-0 t-0'>%</span>
          </div>

          <div className="w-full h-2  bg-gray-700">
            <SectionSkillsPhotoShop>
              <p className=" bg-for-skills  h-full"></p>
            </SectionSkillsPhotoShop>
          </div>
        </div>


        <div className="my-10">
          <div className="flex justify-between relative pr-4 my-1">
            <p className=" text-gray-400">Tailwind CSS</p>
            <motion.p className=" text-gray-400" ref={ref8}>{rounded8}</motion.p>
            <span className='text-gray-400 absolute right-0 t-0'>%</span>
          </div>

          <div className="w-full h-2  bg-gray-700">
            <SectionSkillsTailwind>
              <p className=" bg-for-skills  h-full"></p>
            </SectionSkillsTailwind>
          </div>
        </div>


        <div className="my-10">
          <div className="flex justify-between relative pr-4 my-1">
            <p className=" text-gray-400">Framer motion</p>
            <motion.p className=" text-gray-400" ref={ref9}>{rounded9}</motion.p>
            <span className='text-gray-400 absolute right-0 t-0'>%</span>
          </div>

          <div className="w-full h-2  bg-gray-700">
            <SectionSkillsFramer>
              <p className=" bg-for-skills  h-full"></p>
            </SectionSkillsFramer>
          </div>
        </div>


      </div>
    </div>
  )
}
