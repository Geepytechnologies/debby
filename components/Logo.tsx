import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href={"/"}>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex gap-2 items-center cursor-pointer justify-center"
      >
        <img
          src="logo1.jpeg"
          alt="dcryptgirl"
          className="w-[50px] h-[50px]  rounded-full border-2 border-white "
        />
        <p className="text-light text-[30px]">Dcryptgirl</p>
      </motion.div>
    </Link>
  );
};

export default Logo;
