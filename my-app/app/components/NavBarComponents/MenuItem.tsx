'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import img1 from '../../../public/images/m1.jpg'
import img2 from '../../../public/images/m2.jpg'
import img3 from '../../../public/images/m3.jpg'
import img4 from '../../../public/images/m4.jpg'
import img5 from '../../../public/images/m5.jpg'
import Image from "next/image";

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

const images = [
  img1, img2, img3, img4, img5
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

      <Link href={links[i].href} className="capitalize flex items-center">
        <div className=" w-10 h-10  md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full  mr-5 flex justify-center items-center" style={style}>
          <Image className=" rounded-full" width={200} height={200} alt="images" src={images[i]} />
        </div>
        <div className="flex items-center justify-center h-5 w-28 sm:w-36 md:w-48 py-5 rounded-3xl md:text-2xl" style={style} >
          {links[i].label}
        </div>
      </Link>

    </motion.li>
  );
};
