'use client'
import { motion, useCycle } from "framer-motion";
import Link from "next/link";


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const links = [
  { href: '/about', label: 'about' },
  { href: '/work', label: 'work' },
  { href: '/', label: 'home' },
  { href: '/1', label: '1' },
  { href: '/2', label: '2' }

]
export const MenuItem = ({ i }: any) => {

  const style = { border: `2px solid ${colors[i]}` };




  return (
    <motion.li
    className=" list-none mb-5 flex items-center cursor-pointer"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >

      <Link href={links[i].href} className=" z-10 capitalize flex items-center">
        <div className=" w-10 h-10  md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full  mr-5 flex justify-center items-center" style={style}></div>
        <div className="flex items-center justify-center h-5 w-28 sm:w-36 md:w-48 py-5 rounded-3xl md:text-2xl" style={style} >
          {links[i].label}
        </div>
      </Link>

    </motion.li>
  );
};
