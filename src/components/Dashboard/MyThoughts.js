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
          orderBy("dateISO", "desc"),
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
          orderBy("dateISO", "desc"),
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
      orderBy("dateISO", "desc"),
      limit(10)
    );

    const x = await getDocs(doc1);

    const post = x.docs.map((post) => post.id);

    let lastPostIndex = currentPage * postPerPage;
    let firstPostIndex = lastPostIndex - postPerPage;
    let deletePost = post.slice(firstPostIndex, lastPostIndex);
    const y = deletePost.pop();

    const docRef = doc(db, "Notepad", y);

    deleteDoc(docRef)
    .then(() => {
    console.log("Entire Document has been deleted successfully.")
      })
    .catch(error => {
    console.log(error);
      })
  }

  return (
    <div className="flex flex-col justify-around items-center border-solid border-2 border-[#D4A373] py-2 bg-[#E7D7C1] rounded-3xl min-w-fit rounded-3xl">
      <div className="flex flex-row justify-center items-center px-4">
        <button onClick={backwards}>
          <FaArrowLeft />
        </button>
        <h1 className="pb-2 px-10 text-[#463f3a]" style={{ fontSize: "4.5vh" }}>Thoughts</h1>
        <button>
          <FaArrowRight onClick={fowards} />
        </button>
      </div>
      <div style={{ fontSize: "2.5vh" }}>
        {textBox.map((text) => {
          return (
            <div key={text.id} className="flex flex-col justify-around items-center">
              <h1>{text.Timestamp}</h1>
              <span>{parse(text.textBox)}</span>
            </div>
          );
        })}
      </div>
      <button
          onClick={deleteBtn}
          className="py-2 px-4 bg-[#343a40] border-2 hover:bg-[#6B9080] text-white hover:border-[#CCE3DE] hover:text-[#283618] rounded-full transition-colors duration-100"
          type="submit"
        >
          Delete Thoughts
      </button>
    </div>
  );
};

export default MyThoughts;
