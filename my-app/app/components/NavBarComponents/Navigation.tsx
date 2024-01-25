'use client'
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import Link from "next/link";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};




export function Navigation({ toggleOpen }: any) {

  const itemIds = [0, 1, 2, 3, 4];
  const links = [
    { href: '/about', label: 'about' },
    { href: '/work', label: 'work' },
    { href: '/', label: 'home' },
    { href: '/1', label: '1' },
    { href: '/2', label: '2' }
  ]



  return (
    <motion.ul variants={variants} className=" w-52 md:w-80 lg:w-96">

      {itemIds.map(i => (
        <div key={i} onClick={toggleOpen}>
          
            <MenuItem i={i} />
          


        </div>

      ))}

    </motion.ul>
  );
}


