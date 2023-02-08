import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  doc,
  setDoc,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { db, auth } from "../../firebase/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

const MoodTracker = () => {
  const [mood, setMood] = useState("");
  const [happyWiggle, setHappyWiggle] = useState(false);
  const [sadWiggle, setSadWiggle] = useState(false);
  const [excitedWiggle, setExcitedWiggle] = useState(false);
  const [stressedWiggle, setStressedWiggle] = useState(false);
  const [moodList, setMoodList] = useState([]);
  const [user] = useAuthState(auth);

  // This queries Firestore for the user's mood history and displays it to the page
  useEffect(() => {
    if (user) {
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
        onSnapshot(q, (query) => {
          let moods = [];
          query.forEach((doc) => {
            moods.push({ ...doc.data(), id: doc.id });
          });
          setMoodList(moods);
        });
      };
      getMoodList();
    }
  }, [user]);

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

  return (
    <div className="flex flex-row justify-around items-center border-solid border-2 bg-[#f8f9fa] rounded-3xl">
      <section>
        <h1 className="text-4xl font-bold text-212529 pt-4">MyMoodTracker</h1>
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
      </section>
      <div>
        <h2 className="text-3xl font-bold text-212529 pt-4 text-center">
          History
        </h2>
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
