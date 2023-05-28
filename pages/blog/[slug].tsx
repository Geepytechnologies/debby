import Layout from "@/components/Layout";
import { getPostBySlug, getPosts } from "@/utils";
import { useRouter } from "next/router";
import DOMPurify from "isomorphic-dompurify";
import moment from "moment";

const Index = ({ post }: any) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  const { author, categories, content, featuredImage, title, createdAt } = post;
  const sanitizedHtml = DOMPurify.sanitize(content.html);
  return (
    <>
      <Layout>
        <button
          onClick={goBack}
          className="shadow-md rounded-md m-3 bg-off text-white font-[500] px-5 py-3"
        >
          Back
        </button>
        <div className="flex items-center justify-center p-4">
          <div className="mb-8">
            <h3 className="text-off font-[500]">{categories[0].name}</h3>
            <h1 className="font-[700] text-[30px]">{title}</h1>
            <div className="flex gap-3 mt-3">
              <h2 className="font-[500] font-rubik italic lowercase tracking-wider">
                by {author.name}
              </h2>
              <h2>{moment(createdAt).fromNow()}</h2>
            </div>
            <div className="w-full flex items-center justify-center my-6">
              <div className="w-[300px] sm:w-[400px] md:w-[700px] lg:w-[1000px] ">
                <img src={featuredImage.url} alt="" className="w-full" />
              </div>
            </div>
            <div className="content-wrapper">
              <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
            </div>
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
