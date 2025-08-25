import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  return <h1>Post ID: {postId}</h1>;
};

export default Post;
