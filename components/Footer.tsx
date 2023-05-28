import React, { useState } from "react";
import Logo from "./Logo";
import { Mysocials } from "./Header";
import Toastmessage, { notify, showWarning } from "@/utils/Toastmessage";

type Props = {};

const Footer = (props: Props) => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH || "";
  const token = process.env.NEXT_PUBLIC_HYGRAPH_API || "";

  const subscribe = () => {
    try {
      window.location.href = `mailto:contact@dcryptgirl.net?subject=${encodeURIComponent(
        "Subscription to your Newsletter"
      )}&body=${encodeURIComponent(
        `This user, ${email}, has subscribed to your newsletter.`
      )}`;
      notify("Subscription Successful");
    } catch (error) {}
  };

  const makeRequest = async () => {
    const variables = { email };
    const mutation = `
  mutation CreateEmailSubscription($email: String!) {
    createEmailSubscription(data: { email: $email }) {
      email
    }
  }
`;
    try {
      const response = await fetch(graphqlAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query: mutation, variables }),
      });

      const { data } = await response.json();
      console.log(data); // Handle the received data
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    makeRequest();
    // Perform form submission logic here
  };

  const validateEmail = (email: string) => {
    // Add your email validation logic here
    // Return true if the email is valid, false otherwise
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className="bg-dark py-8">
      <Toastmessage />
      <Logo />
      {/* newsletter form */}

      <div className="flex flex-col gap-3 pl-3 mt-5">
        <p className="text-light">Subscribe to My Newsletter</p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="email"
            onChange={handleEmailChange}
            className="outline-0 bg-white border-0 p-2 rounded-sm w-[250px]"
          />
          <div>
            <button
              type="submit"
              disabled={!isValidEmail}
              className={`border-2 tracking-wider border-off text-off py-2 px-3 ${
                !isValidEmail && "opacity-10"
              }`}
            >
              SUBMIT
            </button>
          </div>
        </form>
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
