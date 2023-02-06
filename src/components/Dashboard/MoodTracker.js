import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDoc,
  updateDoc,
  query,
  where,
  startAt,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import { db, auth } from "../../firebase/firebase-config";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  orderBy,
  limit,
  startAfter,
  limitToFirst,
  onSnapshot,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const MoodTracker = () => {
  const [mood, setMood] = useState("");
  const [happyWiggle, setHappyWiggle] = useState(false);
  const [sadWiggle, setSadWiggle] = useState(false);
  const [excitedWiggle, setExcitedWiggle] = useState(false);
  const [stressedWiggle, setStressedWiggle] = useState(false);
  const [moodList, setMoodList] = useState([]);

  const getMoodList = async () => {
    const q = query(
      collection(
        db,
        "moods",
        auth.currentUser.uid,
        auth.currentUser.displayName
      ),
      orderBy("date", "desc"),
      limit(7)
    );
    const data = await getDocs(q);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setMoodList(filteredData);
  };

  useEffect(() => {
    getMoodList();
  }, []);

  // This adds a new mood to the database.
  const onSubmitMood = async (event) => {
    event.preventDefault();

    const currentDay = new Date().toLocaleDateString("default", {
      weekday: "long",
    });

    const currentDate = new Date().toLocaleDateString("default", {
      day: "numeric",
      month: "long",
    });

    const moodRef = doc(
      db,
      "moods",
      auth.currentUser.uid,
      auth.currentUser.displayName,
      currentDate
    );
    await setDoc(moodRef, {
      mood: mood,
      dayOfWeek: currentDay,
      date: currentDate,
    });
  };

  // const [user] = useAuthState(auth);

  // const currentDate = new Date().toLocaleDateString("default", {
  //   day: "numeric",
  //   month: "long",
  // });

  // const [selectedDate, setSelectedDate] = useState(currentDate);

  // useEffect(() => {
  //   if (user) {
  //     const getMood = async () => {
  //       const q = query(
  //         collection(
  //           db,
  //           "moods",
  //           auth.currentUser.uid,
  //           auth.currentUser.displayName,
  //           selectedDate,
  //           "mood"
  //         )
  //       );
  //       const querySnapshot = await getDocs(q);
  //       querySnapshot.forEach((doc) => {
  //         console.log(`${doc.id} => ${doc.data()}`);
  //       });
  //     };
  //     getMood();
  //   }
  // }, [user, selectedDate]);

  // const backwards = (evt) => {
  //   if (selectedDate === currentDate) {
  //     console.log("if");
  //     const prevDay = currentDate.slice(-1) - 1;
  //     setSelectedDate(prevDay);
  //     console.log(selectedDate);
  //   } else {
  //     console.log("else");
  //     const prevPrevDay = selectedDate - 1;
  //     setSelectedDate(prevPrevDay);
  //     console.log(selectedDate);
  //   }
  // };

  // const forwards = () => {
  //   const date = new Date();
  //   date.setDate(date.getDate() + 1);
  //   setSelectedDate(currentDate);
  // };

  return (
    <div className="flex flex-col items-center bg-white">
      <h1 className="text-4xl font-bold text-212529 pt-4">My Mood Tracker</h1>
      <p className="text-lg text-gray-600 mb-5">
        {`${new Date().toLocaleDateString("default", {
          day: "numeric",
          month: "long",
        })}, ${new Date().toLocaleDateString("default", {
          weekday: "long",
        })}`}
      </p>
      <h2 className="text-xl">How are you feeling today?</h2>
      <form onSubmit={onSubmitMood} className="mt-5">
        <div className="flex text-center">
          <span
            role="img"
            aria-label="Happy"
            onClick={() => [setMood("😊"), setHappyWiggle(true)]}
            className={`${
              happyWiggle && "animate-wiggle"
            } text-5xl mr-5 cursor-pointer`}
            onAnimationEnd={() => setHappyWiggle(false)}
          >
            😊
          </span>
          <span
            role="img"
            aria-label="Sad"
            onClick={() => [setMood("😢"), setSadWiggle(true)]}
            className={`${
              sadWiggle && "animate-wiggle"
            } text-5xl mr-5 cursor-pointer`}
            onAnimationEnd={() => setSadWiggle(false)}
          >
            😢
          </span>
          <span
            role="img"
            aria-label="Excited"
            onClick={() => [setMood("😁"), setExcitedWiggle(true)]}
            className={`${
              excitedWiggle && "animate-wiggle"
            } text-5xl mr-5 cursor-pointer`}
            onAnimationEnd={() => setExcitedWiggle(false)}
          >
            😁
          </span>
          <span
            role="img"
            aria-label="Stressed"
            onClick={() => [setMood("😰"), setStressedWiggle("😰")]}
            className={`text-5xl mr-5 cursor-pointer ${
              stressedWiggle === "😰" ? "animate-wiggle" : ""
            }`}
            onAnimationEnd={() => setStressedWiggle("")}
          >
            😰
          </span>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-5 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-colors duration-300"
          >
            Submit Mood
          </button>
        </div>
      </form>
      <div>
        <h2 className="text-3xl font-bold text-212529 pt-4 text-center">History</h2>
        <ul className="text-2xl text-600 mb-5">
          {moodList.map((mood) => (
            <li>
              {mood.date}, {mood.dayOfWeek} - {mood.mood}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoodTracker;

// {/* <div className="flex justify-between items-center">
//         <button>
//           <FaArrowLeft onClick={backwards} />
//         </button>
//         <p className="text-m text-gray-600 mb-5 px-3">
//           {selectedDate
//             ? `${selectedDate}, ${new Date().toLocaleDateString("default", {
//                 weekday: "long",
//               })}`
//             : `${new Date().toLocaleDateString("default", {
//                 day: "numeric",
//                 month: "long",
//               })}, ${new Date().toLocaleDateString("default", {
//                 weekday: "long",
//               })}`}
//           {/* {`${new Date().toLocaleDateString("default", {
//             day: "numeric",
//             month: "long",
//           })}, ${new Date().toLocaleDateString("default", {
//             weekday: "long",
//           })}`} */}
//         </p>
//         <button>
//           <FaArrowRight onClick={forwards} />
//         </button>
//       </div> */}
