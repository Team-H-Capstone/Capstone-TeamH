import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  where,
  limit,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db, auth } from "../../firebase/firebase-config";
import "./Notepad.css";
import { useAuthState } from "react-firebase-hooks/auth";

const UpdateThoughts = () => {
  const [textBox, setTextBox] = useState("");

  const [editBox, setEditBox] = useState("");

  const [user] = useAuthState(auth);

  const edit = async (evt) => {
    evt.preventDefault();
    console.log("editbtn")

    

  };

  return (
    <div>
      <form
        onSubmit={edit}
        className="flex flex-col justify-center items-center"
      >
        <input
          className="input-thoughts"
          placeholder="Edit MyThoughts"
          type="string"
          value= {textBox}
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

export default UpdateThoughts;
