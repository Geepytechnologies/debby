import React from "react";
import Image from "next/image";
import Link from "next/link";

type Post = {
  title: string;
  excerpt: string;
  featuredImage: {
    url: string;
  };
  date: string;
  author: {
    name: string;
  };
  slug: string;
};

const post = {
  title: "Introduction to web3",
  excerpt: "A Beginner's Guide To Blockchain",
  image: "/bgdeb.jpeg",
  date: Date.now(),
  author: "debby",
};

const Blogcard = ({ post }: { post: Post }) => {
  return (
    <div className="p-3 min-w-[300px]">
      {/* post image */}
      <Link
        href={`/blog/${post.slug}`}
        className=" flex items-center justify-center my-3"
      >
        <Image
          src={post?.featuredImage.url}
          alt=" "
          height={300}
          width={300}
          className="shadow-l"
        />
      </Link>
      {/* article section */}
      <div className="space-y-2">
        <Link href={`/blog/${post.slug}`}>
          <h1 className="font-[600] text-2xl text-center">{post?.title}</h1>
        </Link>
        <h2>{post?.excerpt}</h2>
      </div>
    </div>
  );
};

export default Blogcard;
