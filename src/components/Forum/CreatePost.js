import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase-config";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const postCollection = collection(db, "posts");

  const navigate = useNavigate();

  const createpost = async () => {
    await addDoc(postCollection, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      timestamp: serverTimestamp(),
      comments: [],
    });
    navigate("/forum");
  };

  return (
    <div className="w-full h-screen bg-[#DAD7CD]">
      <section className="flex flex-col justify-center items-center w-full h-full text-[#344E41]">
        <div className="flex flex-col justify-center items-center bg-[#D4A373] p-5">
          <h1 className="text-5xl font-bold">Create a Post</h1>
          <div className="p-2">
            <input
              className="border rounded-lg font-bold text-black p-2 w-full sm:w-64"
              placeholder="Title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div>
            <form>
              <textarea
                className="border rounded-lg w-[500px] h-[500px] font-bold text-black p-2"
                placeholder="Post"
                maxLength={1200}
                onChange={(event) => {
                  setPost(event.target.value);
                }}
              />
            </form>
          </div>
          <button
            className="text-white bg-[#3D405B] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6B9080] hover:border-[#CCE3DE] hover:text-[#283618] hover:font-bold"
            onClick={createpost}
          >
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default CreatePost;
