import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  where,
  limit,
  startAt,
  getDocs,
  startAfter,
  doc
} from "firebase/firestore";
import { db, auth } from "../../firebase/firebase-config";
import "./Notepad.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import parse from "html-react-parser";
import { useAuthState } from "react-firebase-hooks/auth";

const MyThoughts = () => {
  const [textBox, setTextBox] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
        const getData = async () => {

            const q = query(collection(db, "Notepad"), where("uid", "==", auth.currentUser.uid), orderBy("Timestamp"), limit(1));

            const first = await getDocs(q);

            const firstPost = first.docs.map((post) => ({
                ...post.data(),
                id: post.id,
                    }));

            setTextBox(firstPost);
        }
        getData()
    }
  }, [user]);

  const [latestDoc, setLatestDoc] = useState(null);

  const getPrevNote = async () => {
    if (latestDoc == null) {
        console.log("if");
        const q = query(collection(db, "Notepad"), where("uid", "==", auth.currentUser.uid), orderBy("Timestamp"), limit(1));

        const first = await getDocs(q);

        const lastVisible = first.docs[first.docs.length-1];

        const next = query(collection(db, "Notepad"), where("uid", "==", auth.currentUser.uid), orderBy("Timestamp"), startAfter(lastVisible), limit(1));

        const second = await getDocs(next);

        const nextPost = second.docs.map((post) => ({
        ...post.data(),
        id: post.id,
            }));

        setTextBox(nextPost);

        setLatestDoc(second.docs[second.docs.length-1]);

    } else {
        console.log("else")
        const prev = query(collection(db, "Notepad"), where("uid", "==", auth.currentUser.uid), orderBy("Timestamp"), startAfter(latestDoc), limit(1));

        const third = await getDocs(prev);

        const nextNextPost = third.docs.map((post) => ({
            ...post.data(),
            id: post.id,
                }));
        
        setTextBox(nextNextPost);

        setLatestDoc(third.docs[third.docs.length-1]);
    }
  };

  const getForNote = async () => {

  };

  const backwards = (evt) => {
    evt.preventDefault();
    getPrevNote();
  };

  const fowards = (evt) => {
    evt.preventDefault();
    console.log("fowards");
    getForNote();
  };

  const edit= (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center items-center border-solid border-2 min-w-max max-w-xl py-4 bg-[#f8f9fa] rounded-3xl">
      <div className="flex flex-row justify-center items-center">
        <button onClick={backwards}>
          <FaArrowLeft />
        </button>
        <h1 className="text-3xl pb-2 px-10 text-[#463f3a]">MyThoughts</h1>
        <button>
          <FaArrowRight onClick={fowards}/>
        </button>
      </div>
        <div>
          {textBox.map((text) => {
            return (
              <div key={text.id}>
                <h1>{text.Timestamp}</h1>
                <h2>{parse(text.textBox)}</h2>
              </div>
            );
          })}
        </div>
      <form
        onSubmit={edit}
        className="flex flex-col justify-center items-center"
      >
        <input
          className="input-thoughts"
          type="text"
          value={textBox}
          onChange={(e) => setTextBox(e.target.value)}
        />
        <button
          className="px-2 border-solid border-2 hover:bg-white hover:text-gray-800 mt-5"
          type="submit"
        >
          Edit Entry
        </button>
      </form>
    </div>
  );
};

export default MyThoughts;
