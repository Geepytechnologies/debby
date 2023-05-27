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
    <div>
      {/* post image */}
      <Link href={`/blog/${post.slug}`} className="shadow-xl">
        <Image src={post?.featuredImage.url} alt=" " height={300} width={300} />
      </Link>
      {/* article section */}
      <div>
        <Link href={`/blog/${post.slug}`}>
          <h1 className="font-[600] text-2xl">{post?.title}</h1>
        </Link>
        <h2>{post?.excerpt}</h2>
        <h3 className="italic">By {post?.author.name}</h3>
      </div>
    </div>
  );
};

export default Blogcard;
