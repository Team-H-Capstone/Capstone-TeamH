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
    <div className="w-full h-auto grid grid-cols-3 items-center pt-20 bg-[#1e3a8a]">
      {posts.length === 0 ? (
        <p className="w-full h-screen flex justify-center pt-20 bg-[#1e3a8a] text-white">
          {" "}
          No Posts Found!
        </p>
      ) : (
        posts.map(({ id, title, post }) => (
          <div
            key={id}
            className="w-[545px] h-[500px] bg-white shadow-2xl m-2 p-2 rounded-lg"
          >
            <Link to={`/post/${id}`}>
              <h1 className="justify-center font-bold text-2xl">{title}</h1>
              <p className="font-bold pt-6">{post}</p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Forum;
