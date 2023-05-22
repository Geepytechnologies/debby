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
      <div>
        <p className="text-light">Subscribe to My Email list</p>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="outline-0 bg-white border-0 p-2 rounded-md"
        />
        <div>
          <button className="border-2 border-off text-off py-2 px-3">
            SUBMIT
          </button>
        </div>
      </div>
      {/* socials */}
      <div>
        <Mysocials />
      </div>
      <div className="text-light">
        <p>Copyright &#169; {year} Dcryptgirl. All rights reserved.</p>
      </div>
      <div className="text-light">
        <p className="italic">
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
