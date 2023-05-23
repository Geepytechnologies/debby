import React from "react";
import { BsFillMicFill } from "react-icons/bs";

type Props = {};

const Podcast = (props: Props) => {
  return (
    <div className="bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2QxNDIzZWYyNTgxZDRjNDFkMTA3Y2Q3NTFhNDU0YzkwMTcyZGRjMCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/gYDxTQIY7sumXSCYzP/giphy.gif')] bg-contain bg-center relative  h-[500px]">
      <div className="absolute h-full w-full top-0 bg-gradient-to-r to-off from-[#eddaa7] opacity-40"></div>
      <div className="text-white">
        <BsFillMicFill />
        <p>STORIES PODCAST</p>
      </div>
      <div>
        <p></p>
        {/* image of a phone */}
      </div>
      <div className="text-white">
        <button>Coming Soon!!!</button>
      </div>
    </div>
  );
};

export default Podcast;
