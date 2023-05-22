import AddPost from "./AddPost";
import Post from "./Post";
import Stories from "./Stories";

const PostHolder = () => {
  return (
    <div className="w-full col-span-3">
      <Stories />
      <AddPost />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostHolder;
