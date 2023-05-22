import React from "react";

type Props = {};

const Blogskeleton = (props: Props) => {
  return (
    <div>
      {/* hero */}
      <div className="w-full bg-gray-300 h-[500px] flex items-center">
        <div className="w-[400px] h-[350px]"></div>
      </div>
      {/* blog cards */}
      <div className="w-full flex items-center justify-center">
        <div className="w-[80%]">
          {/* first card */}
          <div className="flex gap-2">
            <div className="w-[400px] h-[500px] bg-gray-300"></div>
            <div className="w-[300px] h-[300px] bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogskeleton;
