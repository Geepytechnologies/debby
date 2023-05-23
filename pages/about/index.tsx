import Contact from "@/components/Contact";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

type Props = {};

const Index = (props: Props) => {
  return (
    <>
      <Layout>
        <div className="w-full p-2 flex flex-col items-center">
          <div className="w-full sm:w-[90%] md:w-[70%]">
            <p className="text-center font-mont tracking-wider font-[600] text-gray-500 uppercase">
              About DcryptGirl
            </p>
            <div className="w-full flex items-center justify-center">
              <div className="w-[230px] sm:w-[300px] h-[400px]">
                <img src={"/debby2.jpeg"} alt={""} />
              </div>
            </div>
            <div>
              <p>
                <span className="font-[500]">Debora Ezinne Ifegwu</span> is a
                blockchain enthusiast, influencer, content creator, community
                builder, project manager, and public speaker, all rolled into
                one!
              </p>
              <p>
                As a thought leader and innovator in the industry, she has built
                a reputation for her ability to engage the audience through
                compelling content, build and nurture communities, manage
                complex projects, and captivate crowds with her public speaking.
                Her multifaceted skill set allows her to contribute to the
                success of numerous projects and communities.
              </p>
              <p>
                With her expertise in blockchain technology, she has become a
                go-to blockchain expert for those seeking to elevate their
                projects or communities. Whether it&apos;s through creating
                engaging content, building a strong community, managing project
                complexities, or delivering captivating speeches, she brings a
                unique blend of skills to the table.
              </p>
              <p>
                If you&apos;re ready to take your blockchain project or
                community to new heights, she is here to help. Trust her to
                bring her passion, knowledge, and experience to the table, and
                let&apos;s make your vision a reality!
              </p>
            </div>
          </div>
        </div>

        <Contact />
      </Layout>
    </>
  );
};

export default Index;
