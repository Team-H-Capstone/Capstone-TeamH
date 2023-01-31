import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

const Forum = () => {
  const [postLists, SetPostList] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const snap = onSnapshot(q, (querySnapshot) => {
      let postLists = [];
      querySnapshot.forEach((doc) => {
        postLists.push({ ...doc.data(), id: doc.id });
      });
      SetPostList(postLists);
    });
    return () => snap();
  }, []);

  return (
    <div className="w-full h-auto grid grid-cols-3 items-center pt-20 bg-[#1e3a8a]">
      {postLists.map((post) => {
        return (
          <div
            key={post.id}
            className="w-[545px] h-[500px] bg-white shadow-2xl m-2 p-2 rounded-lg"
          >
            <h1 className="justify-center font-bold text-2xl">{post.title}</h1>
            <p className="font-bold">{post.post}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Forum;
