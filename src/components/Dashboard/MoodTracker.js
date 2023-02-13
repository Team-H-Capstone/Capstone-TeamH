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
          orderBy("dateISO", "desc"),
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

    const getdateISO = () => {
      const dateISO = new Date();
      let year = dateISO.getFullYear();
      let month = dateISO.getMonth() + 1;
      let dt = dateISO.getDate();

      if (dt < 10) {
        dt = "0" + dt;
      }
      if (month < 10) {
        month = "0" + month;
      }

      return year + "-" + month + "-" + dt;
    };

    const moodRef = doc(
      db,
      "moods",
      auth.currentUser.uid,
      auth.currentUser.displayName,
      getdateISO()
    );
    await setDoc(moodRef, {
      mood: mood,
      dayOfWeek: currentDay,
      dateISO: getdateISO(),
      date: currentDate,
    });
  };

  return (
    <div  className="flex flex-row justify-evenly min-w-fit mx-7">
      <section className="flex flex-col justify-center items-center min-w-fit">
        <h1
        className="font-bold text-[#344E41] pt-2"
        style={{ fontSize: "4.5vh" }}
        >Mood Tracker</h1>
        <p
          className="text-[#344E41] mb-2"
          style={{ fontSize: "3.5vh" }}
          >
          {`${new Date().toLocaleDateString("default", {
            day: "numeric",
            month: "long",
          })}, ${new Date().toLocaleDateString("default", {
            weekday: "long",
          })}`}
        </p>
        <h2
         className="text-[#344E41]"
         style={{ fontSize: "3.5vh" }}
        >How are you feeling today?</h2>
        <form onSubmit={onSubmitMood} className="mt-5">
          <div className="flex text-center">
            <div className="mx-2">
              <div
                role="img"
                aria-label="Rad"
                onClick={() => [setMood("😁"), setRadWiggle(true)]}
                className={`${
                  radWiggle && "animate-wiggle"
                } text-5xl cursor-pointer`}
                onAnimationEnd={() => setRadWiggle(false)}
                style={{ fontSize: "7vh" }}
              >
                😁
              </div>
              <p className="text-xl text-teal-500">rad</p>
            </div>
            <div className="mx-2">
              <div
                role="img"
                aria-label="Good"
                onClick={() => [setMood("😀"), setGoodWiggle(true)]}
                className={`${
                  goodWiggle && "animate-wiggle"
                } text-5xl cursor-pointer`}
                onAnimationEnd={() => setGoodWiggle(false)}
                style={{ fontSize: "7vh" }}
              >
                😀
              </div>
              <p className="text-xl text-green-500">good</p>
            </div>
            <div className="mx-2">
              <div
                role="img"
                aria-label="Meh"
                onClick={() => [setMood("😐"), setMehWiggle(true)]}
                className={`${
                  mehWiggle && "animate-wiggle"
                } text-5xl cursor-pointer`}
                onAnimationEnd={() => setMehWiggle(false)}
                style={{ fontSize: "7vh" }}
              >
                😐
              </div>
              <p className="text-xl text-blue-500">meh</p>
            </div>
            <div className="mx-2">
              <div
                role="img"
                aria-label="Bad"
                onClick={() => [setMood("🙁"), setBadWiggle(true)]}
                className={`${
                  badWiggle && "animate-wiggle"
                } text-5xl cursor-pointer`}
                onAnimationEnd={() => setBadWiggle(false)}
                style={{ fontSize: "7vh" }}
              >
                🙁
              </div>
              <p className="text-xl text-orange-500">bad</p>
            </div>
            <div className="mx-2">
              <div
                role="img"
                aria-label="Awful"
                onClick={() => [setMood("😢"), setAwfulWiggle(true)]}
                className={`${
                  awfulWiggle && "animate-wiggle"
                } text-5xl cursor-pointer`}
                onAnimationEnd={() => setAwfulWiggle(false)}
                style={{ fontSize: "7vh" }}
              >
                😢
              </div>
              <p className="text-xl text-red-500">awful</p>
            </div>
          </div>
          <div className="flex justify-center pb-2">
            <button
              type="submit"
              className="mt-2 bg-[#343a40] border-2 hover:bg-[#6B9080] text-white hover:border-[#CCE3DE] hover:text-[#283618] py-2 px-4 rounded-full transition-colors duration-100 focus:border-cyan-500 focus:border-[3px]"
              style={{ fontSize: "3.5vh" }}
            >
              Submit Mood
            </button>
          </div>
        </form>
      </section>
      <section className="flex flex-col items-center min-w-fit">
        <h2
          className="font-bold text-[#344E41] text-center pt-2"
          style={{ fontSize: "4.5vh" }}
        >
          Past Moods
        </h2>
        <ul
          className="text-2xl text-[#344E41] mb-5"
          style={{ fontSize: "3.5vh" }}
          >
          {moodList.map((mood) => (
            <li
            className="flex flex-row justify-between item-center"
            >
                <h1>{mood.date}, {mood.dayOfWeek}</h1>
                <h1 className="pl-4">---- {mood.mood}</h1>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MoodTracker;
