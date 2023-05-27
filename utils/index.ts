import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH || "";

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = (await request(graphqlAPI, query)) as any;
  return result.postsConnection.edges;
};

// getPosts();
export const getPostBySlug = async (slug: string) => {
  const query = gql`
    query getPost($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          name
          photo {
            url
          }
        }
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `;
  const result = (await request(graphqlAPI, query, { slug })) as any;
  console.log({ myresult: result });
  return result.post;
};
