import Layout from "@/components/Layout";
import Blogcard from "@/components/blog/Blogcard";
import Blogskeleton from "@/components/skeletons/Blogskeleton";
import React from "react";

type Props = {};

const Index = (props: Props) => {
  const isloading = true;
  return (
    <>
      <Layout>
        {isloading ? (
          <Blogskeleton />
        ) : (
          <div>
            <div>
              {/* hero header */}
              <div className="w-full flex items-center justify-center">
                <div></div>
              </div>
              {/* blog posts */}
              <div>
                <Blogcard
                  title={""}
                  excerpt={""}
                  image={""}
                  date={""}
                  author={""}
                />
              </div>
            </div>
            {/* sidebar */}
            <div></div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Index;
