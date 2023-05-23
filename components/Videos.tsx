import React from "react";

type Props = {};

const Videos = (props: Props) => {
  const youtube = "https://www.youtube.com/@dcryptgirl/videos";
  return (
    <div>
      <div className="w-full p-3 flex items-center justify-center">
        <div className="flex items-center">
          <div className="">
            <div className="shadow-xl rounded-md border-2 border-white">
              <img
                className="rounded-md"
                alt="gif"
                src="https://media.giphy.com/media/c8JfOlMTJR9oO3Pb3Q/giphy.gif"
              />
            </div>
          </div>
          <div className="flex flex-col ">
            <img
              className="shadow-xl rounded-md border-2 border-white"
              alt="gif"
              src="https://media.giphy.com/media/f1bkbxz3FhZbWP3juR/giphy.gif"
            />
            <img
              className="shadow-xl rounded-md border-2 border-white"
              alt="gif"
              src="https://media.giphy.com/media/f1bkbxz3FhZbWP3juR/giphy.gif"
            />
          </div>
          <div className="">
            <div className="rounded-md shadow-xl border-2 border-white">
              <img
                className="rounded-md"
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDQ0MDc4MmRiZmNlZDI1MzAyODhlNTViMmEyYjMwMDI5NWU1NjI5ZCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/s6eOutRWheyZg41h3l/giphy.gif"
                alt="gif"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
