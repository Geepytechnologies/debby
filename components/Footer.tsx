import React, { useState } from "react";
import Logo from "./Logo";
import { Mysocials } from "./Header";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  return (
    <div className="bg-dark py-8">
      <Logo />
      {/* newsletter form */}
      <div className="flex flex-col gap-3 pl-3 mt-5">
        <p className="text-light">Subscribe to My Newsletter</p>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="outline-0 bg-white border-0 p-2 rounded-sm w-[250px]"
        />
        <div>
          <button className="border-2 tracking-wider border-off text-off py-2 px-3">
            SUBMIT
          </button>
        </div>
      </div>
      {/* socials */}
      <div className="w-full flex items-center justify-center mt-3">
        <Mysocials />
      </div>
      <div className="text-light w-full flex items-center justify-center">
        <p>Copyright &#169; {year} Dcryptgirl. All rights reserved.</p>
      </div>
      <div className="text-light w-full flex items-center justify-center mt-3">
        <p className="italic text-[12px]">
          Made by{" "}
          <a className="underline" href="https://geepy.vercel.app">
            Geepy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
