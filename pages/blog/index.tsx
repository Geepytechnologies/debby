import Layout from "@/components/Layout";
import Blogcard from "@/components/blog/Blogcard";
import Hero from "@/components/blog/Hero";
import Blogskeleton from "@/components/skeletons/Blogskeleton";
import { getPosts } from "@/utils";
import React from "react";

type Props = {};

const Index = ({ posts }: any) => {
  const isloading = false;
  const gridColsClass =
    posts.length <= 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
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
              <div
                className={`grid p-4 justify-center ${gridColsClass}  gap-5`}
              >
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
