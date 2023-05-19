import AddPost from "./AddPost"
import Post from "./Post"

const PostHolder = () => {
  return (
    <div className="w-full">
        <AddPost />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default PostHolder