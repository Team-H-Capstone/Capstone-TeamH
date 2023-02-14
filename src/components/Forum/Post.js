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
          <div
            className="sm:flex-row sm:justify-center bg-[#D4A373] p-5 rounded-xl"
          >
            <div>
              <h1 className="font-bold text-4xl">{post.title}</h1>
                <div className="flex flex-row items-center">
                  <p className="font-bold">{post.author.name}</p>
                  <p className="text-[14px] italic ml-3">{post.date}</p>
                </div>
              <p className="w-full sm:w-[900px] bg-white shadow-2xl m-2 p-2 rounded-lg text-black font-bold">
                {post.post}
              </p>
            </div>
            <Comment id={id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
