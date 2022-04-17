import Link from "next/Link";

function PostList({ posts }) {
  return (
    <>
      <h1> List of Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            {/* if we have a child that is not an anchor tag then we have to use passhref*/}
            <Link href={`posts/${post.id}`} passahref>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      //   posts: data.slice(0, 3), // to return only first 3 posts
      posts: data, // to check how getStaticPaths can handle n number of paths dynamically and not hardcoding only 3
    },
  };
}
