import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <div className="w-[50px] h-[50px]  rounded-full border-2 border-white  ">
        <img src="logo1.jpeg" alt="dcrypt" className="rounded-full" />
      </div>
      <p className="text-light text-[30px]">Dcryptgirl</p>
    </div>
  );
};

export default Logo;
