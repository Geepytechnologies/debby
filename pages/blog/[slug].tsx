import Layout from "@/components/Layout";
import { getPostBySlug, getPosts } from "@/utils";
import { useRouter } from "next/router";

const Index = ({ post }: any) => {
  console.log({ single: post });
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <>
      <Layout>
        <button
          onClick={goBack}
          className="shadow-md rounded-md m-3 bg-off text-white font-[500] px-5 py-3"
        >
          Back
        </button>
        <div className="flex items-center justify-center">
          <div className="mb-8">
            <div className="w-[300px] sm:w-[400px] md:w-[600px] bg-[red]">
              <img src={"/zoa.jpeg"} alt="" className="w-full" />
            </div>
            <h1>Title</h1>
            <h2>Published</h2>
            <div>blog post</div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;

export async function getStaticProps({ params }: any) {
  const post = (await getPostBySlug(params.slug)) || [];

  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }: { node: { slug: string } }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
