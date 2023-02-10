import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase-config";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [user] = useAuthState(auth);

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
    <div className="w-full h-screen flex flex-col">
      <section className="pt-28 bg-[#DAD7CD] text-center text-[#3A5A40]">
      <h1
      className="text-[45px] font-bold "
      >A Safe Space To Express Yourself</h1>
      {!user ? (<p>Welcome to our forum, where you can connect with our community! Sign up to post and comment.</p>): null}
      </section>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 bg-[#DAD7CD]">
        {posts.length === 0 ? (
          <p className="w-full h-full flex justify-center items-center pt-20 bg-[#DAD7CD] text-[#3A5A40] text-center">
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
    </div>
  );
};

export default Forum;
