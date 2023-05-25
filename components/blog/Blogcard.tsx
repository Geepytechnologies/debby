import React from "react";
import Image from "next/image";

type Post = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
};

const post = {
  title: "introduction to web3",
  excerpt: "A Beginner's Guide To Blockchain",
  image: "/bgdeb.jpeg",
  date: Date.now(),
  author: "debby",
};

const Blogcard = (props: Post) => {
  return (
    <div>
      {/* post image */}
      <div>
        <Image src={post.image} alt=" " height={400} width={400} />
      </div>
      {/* article section */}
      <div>
        <h1>{post.title}</h1>
      </div>
    </div>
  );
};

export default Blogcard;
