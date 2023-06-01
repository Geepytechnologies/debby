import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Blockchain Influencer",
      "Digital Content Creator",
      "Project Manager",
      "Community Builder",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" w-full flex items-center py-4 bg-gradient-to-r from-white to-gray-100 pb-8 min-h-[400px]">
      <div className="flex flex-col md:flex-row items-center justify-center h-full">
        <div className=" pl-4 py-4 flex flex-col  gap-3 pr-4 order-2 md:order-1">
          <h2 className="text-2xl">Hi, I&apos;m Deborah,</h2>
          <h1 className="text-5xl lg:text-6xl text-dark flex items-center  min-h-[100px] md:min-h-[130px] font-semibold">
            <span className="">{text}</span>
            {/* <Cursor cursorColor="#eddaa7" /> */}
          </h1>
          <h3 className="">
            With my expertise in blockchain technology, I have become a go-to
            blockchain expert for those seeking to elevate their projects or
            communities.
          </h3>
          <div>
            <Link href="/about">
              <button className=" bg-off font-[600] px-2 py-3 text-white flex items-center justify-center gap-2">
                About Me{" "}
                <AiOutlineArrowDown className="animate-bounce text-[white] " />
              </button>
            </Link>
          </div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="relative w-full flex justify-center order-1 md:order-2"
        >
          {/* <Image
            src="/debbytrans.png"
            alt="Deborah Ifegwu(Dcryptgirl)"
            width={200}
            height={200}
            priority
          />
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 319"
            className="absolute -bottom-1"
          >
            <defs>
              <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f9fafb" />
                <stop offset="100%" stopColor="#f3f4f6" />
              </linearGradient>
            </defs>
            <path
              fill="url(#myGradient)"
              // fill="#f3f4f6"
              fillOpacity="1"
              d="M0,256L80,229.3C160,203,320,149,480,144C640,139,800,181,960,176C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg> */}
          <div className="bg-[url('/debby1.jpeg')] bg-cover w-[300px] h-[300px] rounded-full border-[white] border-[5px] shadow-xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
