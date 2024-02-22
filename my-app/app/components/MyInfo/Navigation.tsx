
import { motion } from "framer-motion";
import { MenuItem } from "../NavBarComponents/MenuItem";


const variants = {

  open: {
    zIndex: 100,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1,delay:0.3 },
    zIndex: -100,
   
  }
};




export function Navigation({ toggleOpen }: any) {

  const itemIds = [0, 1, 2, 3, 4];


  return (
    <motion.ul variants={variants} className=" w-52 md:w-80 lg:w-96"

    >

      {itemIds.map(i => (
        <div key={i} onClick={toggleOpen}>
          <MenuItem i={i} />
        </div>

      ))}

    </motion.ul>
  );
}


