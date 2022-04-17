function Post({ post }) {
  return (
    <>
      <h2>
        Product{post.id}
        {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}
export default Post;

export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { postId: '1' }, },
//       { params: { postId: '2' }, },
//       { params: { postId: '3' }, },
//     ],
//     fallback: false,
//   };

// To make it dynamic and not hardcoding, we have make following changes

const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await response.json();

const paths = data.map(post => {
    return{
        params: { postId: `${post.id}`}
    }
});

return {
    // paths : paths  // This will also work, below line is ES6 syntax
    paths,
    fallback: false,  //possible values : false / true / blocking
}
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  }
}
