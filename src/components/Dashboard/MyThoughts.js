import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  where,
  limit,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db, auth } from "../../firebase/firebase-config";
import "./Notepad.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import parse from "html-react-parser";
import { useAuthState } from "react-firebase-hooks/auth";

const MyThoughts = () => {
  const [textBox, setTextBox] = useState([]);
  const [list, setList] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const getData = async () => {
        const q = query(
          collection(db, "Notepad"),
          where("uid", "==", auth.currentUser.uid),
          orderBy("Timestamp", "desc"),
          limit(1)
        );

        onSnapshot(q, (query) => {
            let texts = [];
            query.forEach((doc) => {
                texts.push({ ...doc.data(), id: doc.id });
            })
            setTextBox(texts);
        });
        // -------------------------------------------------------
        const first10 = query(
          collection(db, "Notepad"),
          where("uid", "==", auth.currentUser.uid),
          orderBy("Timestamp", "desc"),
          limit(10)
        );

        onSnapshot(first10, (query) => {
            let arry = [];
            query.forEach((doc) => {
                arry.push({ ...doc.data(), id: doc.id })
            })
            setList(arry);
        });
        
      };
      getData();
    }
  }, [user]);

  
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 1

  const getPrevNote = async() => {
    if(currentPage < list.length)
  setCurrentPage(currentPage + 1) };

  const getForNote = async () => {
    if(currentPage > 1)
  setCurrentPage(currentPage - 1) };


  useEffect(() => { 
    let lastPostIndex = currentPage * postPerPage;
    let firstPostIndex = lastPostIndex - postPerPage;
    let currentPosts = list.slice(firstPostIndex, lastPostIndex);
    setTextBox(currentPosts);
  }, [currentPage, list]);

  const backwards = (evt) => {
    evt.preventDefault();
    console.log("backwards");
    getPrevNote();
  };

  const fowards = (evt) => {
    evt.preventDefault();
    console.log("fowards");
    getForNote();
  };

  const deleteBtn = async (evt) => {
    evt.preventDefault();
    console.log("delete");

    const doc1 = query(
      collection(db, "Notepad"),
      where("uid", "==", auth.currentUser.uid),
      orderBy("Timestamp", "desc"),
      limit(10)
    );

    const x = await getDocs(doc1);

    const post = x.docs.map((post) => post.id);
    console.log("id ----->",post);

    let lastPostIndex = currentPage * postPerPage;
    let firstPostIndex = lastPostIndex - postPerPage;
    let deletePost = post.slice(firstPostIndex, lastPostIndex);
    console.log("deletepost ---->", deletePost)
    const y = deletePost.pop();
    console.log("y ---->", typeof y, y)

    const docRef = doc(db, "Notepad", y);
    console.log("docref ------->", docRef)

    deleteDoc(docRef)
    .then(() => {
    console.log("Entire Document has been deleted successfully.")
      })
    .catch(error => {
    console.log(error);
      })
  }

  return (
    <div className="flex flex-col justify-center items-center border-solid border-2 min-w-max max-w-xl py-4 bg-[#f8f9fa] rounded-3xl">
      <div className="flex flex-row justify-center items-center">
        <button onClick={backwards}>
          <FaArrowLeft />
        </button>
        <h1 className="text-3xl pb-2 px-10 text-[#463f3a]">MyThoughts</h1>
        <button>
          <FaArrowRight onClick={fowards} />
        </button>
      </div>
      <div>
        {textBox.map((text) => {
          return (
            <div key={text.id}>
              <h1>{text.Timestamp}</h1>
              <span>{parse(text.textBox)}</span>
            </div>
          );
        })}
      </div>
      <button
          onClick={deleteBtn}
          className="px-2 border-solid border-2 hover:bg-white hover:text-gray-800 mt-5"
          type="submit"
        >
          Delete MyThoughts
      </button>
    </div>
  );
};

export default MyThoughts;
