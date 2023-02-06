import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { Link } from "react-router-dom";

const Forum = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(posts);
    });
  }, []);

  return (
<div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-20 bg-[#1e3a8a]">
  {posts.length === 0 ? (
    <p className="w-full h-full flex justify-center items-center pt-20 bg-[#1e3a8a] text-white text-center">
      No Posts Found!
    </p>
  ) : (
    posts.map(({ id, title, post }) => (
      <div
        key={id}
        className="w-full md:w-auto sm:w-auto h-500px bg-white shadow-2xl m-2 p-2 rounded-lg"
      >
        <Link to={`/post/${id}`}>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p
            className="h-500px overflow-auto font-bold pt-6"
            style={{ wordWrap: "break-word" }}
          >
            {post}
          </p>
        </Link>
      </div>
    ))
  )}
</div>
  );
};

export default Forum;
