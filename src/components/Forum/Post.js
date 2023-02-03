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
    <div className="flex flex-col justify-center w-full h-screen bg-[#1e3a8a] text-white">
      {post && (
        <div className="flex justify-center">
        <div className="justify-around">
          <h1 className="font-bold text-4xl w-[700px]">{post.title}</h1>
            <p className="w-[700px] h-[500px] bg-white shadow-2xl m-2 p-2 rounded-lg text-black font-bold">
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
