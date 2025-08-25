import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Blog Post ID: {id}</h1>
      <p>This is a dynamically routed blog post.</p>
    </div>
  );
};

export default BlogPost;
