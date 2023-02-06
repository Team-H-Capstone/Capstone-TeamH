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

    const [editBox, setEditBox] = useState("");
    const [user] = useAuthState(auth);

    return (
        <div>

        </div>
    )
};

export default UpdateThoughts;