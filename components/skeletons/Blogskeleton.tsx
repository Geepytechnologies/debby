import React from "react";

type Props = {};

const Blogskeleton = (props: Props) => {
  const frames = [1, 2, 3];
  return (
    <div className="skeleton">
      {/* hero */}
      <div className="w-full  h-[500px] flex items-center justify-center">
        <div className="w-[400px] h-[350px] bg-gray-200 rounded-md p-3 shadow-2xl">
          <div className="w-full h-full bg-white rounded-md"></div>
        </div>
      </div>
      {/* blog cards */}
      <div className="w-full flex items-center justify-center">
        <div className="w-[80%]">
          {/* first card */}
          {frames.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-2 border-2 my-3 shadow-2xl p-4"
            >
              <div className="w-full flex items-center justify-center">
                <div className="w-[300px] h-[300px] bg-gray-300"></div>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="w-full h-[10px] bg-gray-300"></div>
                <div className="w-full h-[10px] bg-gray-300"></div>
                <div className="w-full h-[100px] md:flex-1 bg-gray-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogskeleton;
