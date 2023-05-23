import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";
import Link from "next/link";

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
    <div className=" w-full bg-gradient-to-r from-white to-gray-100 h-[400px]">
      <div className="flex items-center justify-center h-full">
        <div className=" pl-4 py-4 flex flex-col gap-3 pr-4">
          <h2 className="text-2xl">Hi, I&apos;m Debora,</h2>
          <h1 className="text-5xl lg:text-6xl text-dark font-semibold">
            <span className="">{text}</span>
            <Cursor cursorColor="#eddaa7" />
          </h1>
          <h3>
            With my expertise in blockchain technology, I have become a go-to
            blockchain expert for those seeking to elevate their projects or
            communities.
          </h3>
          <div>
            <Link href="/about">
              <button className="bg-gradient-to-r to-off from-[#eddaa7] font-[600] px-2 py-3 text-white flex items-center justify-center gap-2">
                Read More{" "}
                <AiOutlineArrowDown className="animate-bounce text-[white] " />
              </button>
            </Link>
          </div>
        </div>
        <Image src="/herot.png" alt="" width={400} height={400} />
      </div>
    </div>
  );
};

export default Hero;
