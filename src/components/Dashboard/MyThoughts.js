import React, { useState, useEffect } from "react";
import { collection, query, orderBy, where, getDocs, onSnapshot  } from "firebase/firestore"
import {db, auth} from "../../firebase-config";
import "./Notepad.css"
import {
    FaArrowLeft,
    FaArrowRight
} from "react-icons/fa";

const MyThoughts = () => {
    const [textBox, setTextBox] = useState([]);

    // console.log("user ----->",auth.currentUser.uid);

    useEffect(() => {
        const q = query(collection(db, "Notepad"), orderBy("Timestamp"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let textBox = [];
            querySnapshot.forEach((doc) => {
                textBox.push({...doc.data(), id:doc.id});
            });
            setTextBox(textBox);
        })
        return () => unsubscribe();
    }, []);

    // useEffect(() => {
    //     const q = query(collection(db, "Notepad"), orderBy("Timestamp"), where("id", "==", auth.currentUser.uid));
    //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //         const data = [];
    //         querySnapshot.forEach((doc) => {
    //             data.push(doc.doc().name);
    //         })
    //         console.log("current text ---->", data.join(","));
    //     })
    // });

    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //     const cities = [];
    //     querySnapshot.forEach((doc) => {
    //         cities.push(doc.data().name);
    //     });
    //     console.log("Current cities in CA: ", cities.join(", "));

    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //     doc.data();
    //     console.log(doc.id, "=>", doc.doc());
    // })

    const handleSubmit = (evt) => {
        evt.preventDefault();

    };

    return(
        <div className="flex flex-col justify-center items-center border-solid border-2 min-w-max max-w-xl py-4 bg-[#f8f9fa] rounded-3xl">
            <div className="flex flex-row justify-center items-center">
                <button><FaArrowLeft /></button>
                <h1 className="text-3xl pb-2 px-10 text-[#463f3a]">MyThoughts</h1>
                <button><FaArrowRight /></button>
            </div>
            <div>
                {textBox.map((text) => {
                    return (
                        <div ke={text.id}>
                            <h1>{text.textBox}</h1>
                        </div>
                    )
                })}
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center" >
                <input
                className="input-thoughts"
                type="text"
                value={textBox}
                onChange={(e) => setTextBox(e.target.value)}
                />
                <button className="px-2 border-solid border-2 hover:bg-white hover:text-gray-800 mt-5" type="submit">Edit Entry</button>
            </form>
        </div>
    )
};

export default MyThoughts;