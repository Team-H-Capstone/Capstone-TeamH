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
  const [radWiggle, setRadWiggle] = useState(false);
  const [goodWiggle, setGoodWiggle] = useState(false);
  const [mehWiggle, setMehWiggle] = useState(false);
  const [badWiggle, setBadWiggle] = useState(false);
  const [awfulWiggle, setAwfulWiggle] = useState(false);
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
        <h1 className="text-4xl font-bold text-212529 pt-4">Mood Tracker</h1>
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
            <div>
              <div
                role="img"
                aria-label="Rad"
                onClick={() => [setMood("😁"), setRadWiggle(true)]}
                className={`${
                  radWiggle && "animate-wiggle"
                } text-5xl mr-5 cursor-pointer`}
                onAnimationEnd={() => setRadWiggle(false)}
              >
                😁
              </div>
              <p className="pr-5 text-xl text-teal-500">rad</p>
            </div>
            <div>
              <div
                role="img"
                aria-label="Good"
                onClick={() => [setMood("😀"), setGoodWiggle(true)]}
                className={`${
                  goodWiggle && "animate-wiggle"
                } text-5xl mr-5 cursor-pointer`}
                onAnimationEnd={() => setGoodWiggle(false)}
              >
                😀
              </div>
              <p className="pr-5 text-xl text-green-500">good</p>
            </div>
            <div>
              <div
                role="img"
                aria-label="Meh"
                onClick={() => [setMood("😐"), setMehWiggle(true)]}
                className={`${
                  mehWiggle && "animate-wiggle"
                } text-5xl mr-5 cursor-pointer`}
                onAnimationEnd={() => setMehWiggle(false)}
              >
                😐
              </div>
              <p className="pr-5 text-xl text-blue-500">meh</p>
            </div>
            <div>
              <div
                role="img"
                aria-label="Bad"
                onClick={() => [setMood("🙁"), setBadWiggle(true)]}
                className={`${
                  badWiggle && "animate-wiggle"
                } text-5xl mr-5 cursor-pointer`}
                onAnimationEnd={() => setBadWiggle(false)}
              >
                🙁
              </div>
              <p className="pr-5 text-xl text-orange-500">bad</p>
            </div>
            <div>
              <div
                role="img"
                aria-label="Awful"
                onClick={() => [setMood("😢"), setAwfulWiggle(true)]}
                className={`${
                  awfulWiggle && "animate-wiggle"
                } text-5xl mr-5 cursor-pointer`}
                onAnimationEnd={() => setAwfulWiggle(false)}
              >
                😢
              </div>
              <p className="pr-5 text-xl text-red-500">awful</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-5 bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded-full transition-colors duration-300"
            >
              Submit Mood
            </button>
          </div>
        </form>
      </section>
      <div>
        <h2 className="text-3xl font-bold text-212529 pt-4 text-center">
          Past Moods
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