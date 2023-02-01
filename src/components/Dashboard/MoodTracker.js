import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase-config";

const MoodTracker = () => {
  const [mood, setMood] = useState("");
  const [happyWiggle, setHappyWiggle] = useState(false);
  const [sadWiggle, setSadWiggle] = useState(false);
  const [excitedWiggle, setExcitedWiggle] = useState(false);
  const [stressedWiggle, setStressedWiggle] = useState(false);

  const addMood = async (event) => {
    event.preventDefault();

    const currentDay = new Date().toLocaleDateString("default", {
      weekday: "long",
    });

    addDoc(collection(db, "moods"), {
      mood,
      dayOfWeek: currentDay,
      author: auth.currentUser.displayName,
      uid: auth.currentUser.uid,
      Timestamp: new Date(),
    });
  };

  return (
    <div className="flex flex-col items-center bg-white">
      <h1 className="text-3xl font-bold text-[#212529] pt-4">
        My Mood Tracker
      </h1>
      <p className="text-m text-gray-600 mb-5">
        {`${new Date().toLocaleDateString("default", {
          day: "numeric",
          month: "long",
        })}, ${new Date().toLocaleDateString("default", {
          weekday: "long",
        })}`}
      </p>
      <form onSubmit={addMood} className="mt-5">
        <div className="flex">
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
        <p className="text-2xl text-gray-600 mb-5 text-center pt-4">
          Mood for today: {mood}
        </p>
        <div className="flex justify-center">
        <button
          type="submit"
          className="mt-5 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-colors duration-300"
        >
          Submit Mood
        </button>
        </div>
      </form>
    </div>
  );
};

export default MoodTracker;
