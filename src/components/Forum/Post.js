import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase-config";
import Comment from "./Comment";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const collection = doc(db, "posts", id);
    onSnapshot(collection, (snapshot) => {
      setPost({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);

  return (
<div className="flex justify-center h-screen pt-20 sm:flex-row sm:justify-center bg-[#DAD7CD] text-[#344E41]">
  {post && (
    <div className="sm:flex-row sm:justify-center">
      <div>
        <h1 className="font-bold text-4xl">{post.title}</h1>
          <p className="w-full sm:w-[950px] bg-white shadow-2xl m-2 p-2 rounded-lg text-black font-bold">
            {post.post}
          </p>
        </div>
        <Comment id={id} />
      </div>
  )}
</div>
  );
};

export default Post;
