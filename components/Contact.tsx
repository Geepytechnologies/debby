import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:contact@dcryptgirl.net?subject=${data.subject}&body=Hi,my name is ${data.name}, ${data.message}`;
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className=" relative flex flex-col space-y-3 text-center md:text-left max-w-full justify-evenly px-10 py-10 items-center"
    >
      <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl">
        Get In Touch
      </h3>
      <div className="space-y-4 text-[18px]">
        <p className="flex gap-1 items-center">
          <AiOutlineMail />
          contact@dcryptgirl.net
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-full md:w-[70%]  mx-auto"
      >
        <div className="flex flex-col md:flex-row w-full gap-2">
          <input
            {...register("name")}
            placeholder="Name"
            className="contact md:w-[50%]"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contact md:w-[50%]"
            type="email"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contact"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contact min-h-[100px]"
        />
        <button
          type="submit"
          className="bg-off mt-2 text-[20px] font-[600] rounded-sm py-3"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
