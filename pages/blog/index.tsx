import Layout from "@/components/Layout";
import Blogcard from "@/components/blog/Blogcard";
import Hero from "@/components/blog/Hero";
import Blogskeleton from "@/components/skeletons/Blogskeleton";
import { getPosts } from "@/utils";
import React from "react";

type Props = {};

const Index = ({ posts }: any) => {
  const isloading = false;
  const blogs = [1, 2, 3, 4, 5, 6];
  console.log({ posts: posts });
  return (
    <>
      <Layout>
        {isloading ? (
          <Blogskeleton />
        ) : (
          <div>
            <Hero />
            <div className="w-full flex items-center justify-center p-3 mt-7">
              {/* blog posts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {posts.map((item: any, index: any) => (
                  <Blogcard key={index} post={item.node} />
                ))}
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: { posts },
  };
}
