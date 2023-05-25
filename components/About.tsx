import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col md:text-left max-w-7xl justify-evenly px-10 mx-auto items-center"
    >
      <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="text-base font-mont space-y-8">
        <p className="py-4 font-rob">
          I&apos;m a blockchain enthusiast, influencer, content creator,
          community builder, project manager, and public speaker, all rolled
          into one!
        </p>
        <p className="py-4">
          As a thought leader and innovator in the industry, I have built a
          reputation for my ability to engage audience through compelling
          content, build and nurture communities, manage complex projects, and
          captivate crowds with my public speaking. My multifaceted skill set
          allows me to contribute to the success of numerous projects and
          communities
        </p>
        <p className="py-4">
          With my expertise in blockchain technology, I have become a go-to
          blockchain expert for those seeking to elevate their projects or
          communities. Whether it&apos;s through creating engaging content,
          building a strong community, managing project complexities, or
          delivering captivating speeches, I bring a unique blend of skills to
          the table.
        </p>
        <p className="py-4">
          If you&apos;re ready to take your blockchain project or community to
          new heights, I&apos;m here to help. Trust me to bring my passion,
          knowledge, and experience to the table, and let&apos;s make your
          vision a reality!
        </p>
        <p className="py-4">
          Contact me today to discuss how I can contribute to your project
          success at the ending.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
