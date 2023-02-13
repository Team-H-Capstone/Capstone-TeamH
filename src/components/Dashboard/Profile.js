import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase/firebase-config";
import {
  updateDoc,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { getAuth, updateEmail, updateProfile } from "firebase/auth";

const Profile = () => {
  // const users = auth.currentUser;
  // console.log('current user--->', users)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userLists, setUserLists] = useState([]);

  const [user, loading, error] = useAuthState(auth);
  // console.log('profile--->', user)
  // console.log('current user--> ', auth.currentUser.displayName)

  // const profileRefs = collection(db, 'users');
  // const fetchUserList = async () => {
  //   try {
  //     const users = await getDocs(profileRefs);
  //     const filteredUsers = users.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setUserLists(filteredUsers);
  //     console.log('filtered users--->', filteredUsers);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // useEffect(() => {
  //   if (user) {
  //     setName(user.displayName);
  //     setEmail(user.email);
  //     fetchUserList();
  //   }
  // }, []);

  const handleUpdateV2 = async (id) => {
    const profileDoc = doc(db, "users", id);
    await updateDoc(profileDoc, {
      name: name,
    }).then(() => console.log("updated!", auth.currentUser.displayName));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const profileRef = doc(db, "users", user.uid);
    console.log("event--->", e);
    // console.log('user id --->', user.uid);
    console.log("profileRef--->", profileRef);

    const profileDoc = await getDoc(profileRef).catch((error) =>
      console.error(error)
    );
    if (!profileDoc) {
      console.error("No document found for this user ID");
      return;
    }
    console.log("profileDoc--->", profileDoc);
    // const profile = await getDoc(profileRef);
    // console.log('profile--->', profile.data());

    await updateDoc(profileRef, {
      name,
      email,
    });
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    await updateEmail(auth.currentUser, email);
    await auth.currentUser.reload();
    console.log("updated!", auth.currentUser.displayName);
  };

  return (
    <div
      className="flex flex-col justify-center items-center w-full h-screen bg-[#DAD7CD]"
    >
    <div className="flex flex-col justify-center items-center bg-[#D4A373] p-5 rounded-lg">
      <h1 className="text-5xl font-bold flex justify-center text-[#344E41]">
        Edit Profile
      </h1>
      <div className="text-2xl font-bold flex justify-center">
        <form className="pt-10 px-10">
          <div>
            <input
              type="string"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-black p-2 rounded-lg"
            />
          </div>
          <div className="pt-5">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black p-2 rounded-lg"
            />
          </div>
          <div className="pt-5">
            <input
              type="string"
              placeholder="Password"
              name="password"
              id="password"
              className="text-black p-2 rounded-lg"
            />
          </div>
          <div className="flex justify-center pt-5">
            <button
              onClick={handleUpdate}
              className="text-white bg-[#343a40] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6B9080] hover:border-[#CCE3DE] hover:text-[#283618] hover:font-bold rounded-full transition-colors duration-100"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Profile;