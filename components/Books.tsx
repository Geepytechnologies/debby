import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillEye } from "react-icons/ai";

type Props = {};

const Books = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center my-5 justify-center">
      <h2 className="text-center font-mont text-lg p-2 text-gray-500 tracking-wider">
        Best Selling Books
      </h2>
      <div className="w-full p-2 md:w-[80%] lg:w-[60%] flex items-center justify-center">
        <div className="shadow-2xl p-3">
          {/* book card */}
          <div className="space-y-2 p-2 w-[250px] sm:w-[300px] sm:space-y-3 md:w-[400px] md:space-y-4">
            <div className="flex items-center justify-center">
              <Image src={"/web3book.jfif"} alt="" width={200} height={200} />
            </div>
            <h1 className="font-[500] text-center">
              A Beginner&apos;s Guide To Blockchain
            </h1>
            <h2>
              From Web zer0 to Web 3.0 is all the introduction you need to the
              decentralized world.
            </h2>

            <a
              href="https://selar.co/m/dcryptgirlStore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center p-2 justify-center bg-off text-white"
            >
              <AiFillEye />
              Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
