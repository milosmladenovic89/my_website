'use client'

import { useDimensions } from "./NavBarComponents/use-Dimensions";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./NavBarComponents/MenuToggle";
import { Navigation } from "./NavBarComponents/Navigation";
const width = `calc(100% - 40px)`

const sidebar = {

  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at ${width} 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: `circle(30px at ${width} 40px)`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 250,
      damping: 40
    }
  }
};



export default function NavBar() {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >

      <motion.div className="background" variants={sidebar} />
      <Navigation toggleOpen={toggleOpen} />
      <MenuToggle toggle={() => toggleOpen()} />

    </motion.nav>
  );
};
