import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase-config';
import { updateDoc, doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth, updateProfile } from 'firebase/auth';

const Profile = () => {
  // const user = auth.currentUser;
  // console.log('current user--->', user)
  const [name, setName] = useState('');

  const [user, loading, error] = useAuthState(auth);
  // console.log('profile--->', user)
  const handleUpdate = async (e) => {
    e.preventDefault();
    // const auth = getAuth();
    const profileRef = doc(db, 'users', user.uid);
    // console.log('event--->', e);
    console.log('user id --->', user.uid);
    console.log('profileRef--->', profileRef);

    const profileDoc = await getDoc(profileRef).catch((error) =>
      console.error(error)
    );
    if (!profileDoc) {
      console.error('No document found for this user ID');
      return;
    }
    console.log('profileDoc--->', profileDoc);
    // const profile = await getDoc(profileRef);
    // console.log('profile--->', profile.data());

    // const newProfile = { name: 'Tien' };
    await updateDoc(profileRef, {
      name,
      // newProfile
      // name: name,
    }).then(() => console.log('updated!', auth.currentUser.displayName));
  };

  const handleUpdates = async (e) => {
    try {
      const auth = getAuth();
      // const profile =
      console.log('auth ---->', auth.currentUser);
      await updateProfile(user, {
        displayName: name,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center w-screen h-screen bg-[#1e3a8a]">
      <div className=" pt-24 pl-60 text-white">
        Edit Profile
        <form className="my-0 mx-auto max-w-md">
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <input
              type="string"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-black"
            />
          </div>
          <div className="">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="mt-4">
            <label htmlFor="password">Password</label>
            <input
              type="string"
              name="password"
              id="password"
              className="text-black"
            />
          </div>
          <div className="mt-4">
            <button
              onClick={handleUpdate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
