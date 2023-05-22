import React from "react";
import { BsFillMicFill } from "react-icons/bs";

type Props = {};

const Podcast = (props: Props) => {
  return (
    <div>
      <div>
        <BsFillMicFill />
        <p>STORIES PODCAST</p>
      </div>
      <div>
        <p></p>
        {/* image of a phone */}
      </div>
      <div>
        <button>Coming Soon!!!</button>
      </div>
    </div>
  );
};

export default Podcast;
