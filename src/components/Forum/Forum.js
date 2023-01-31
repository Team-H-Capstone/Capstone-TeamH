import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../firebase-config";

const Forum = () => {
  const [postLists, SetPostList] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp"));
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
    <div className="w-full h-auto flex flex-col items-center pt-20 bg-[#1e3a8a]">
      {postLists.map((post) => {
        return (
          <div
            key={post.id}
            className="w-[600px] h-auto max-h-[600px] bg-white shadow-2xl m-2 p-2 rounded-lg"
          >
            <div className="justify-center">
              <div className="font-bold text-2xl">
                <h1>{post.title}</h1>
              </div>
            </div>
            <p className="font-bold">{post.post}</p>
            <div>{post.author.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Forum;
