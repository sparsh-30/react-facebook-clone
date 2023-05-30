import { useState } from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import Stories from "./Stories";
import { db } from "./../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const PostHolder = () => {
  const [posts, setPosts] = useState([]);

  const postRef = collection(db, "Posts");
  onSnapshot(query(postRef, orderBy("createdAt", "desc")), (snapshot) => {
    setPosts(snapshot.docs.map((post) => ({ id: post.id, ...post.data() })));
  });

  return (
    <div className="w-full col-span-3">
      <Stories />
      <AddPost />
      {posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </div>
  );
};

export default PostHolder;
