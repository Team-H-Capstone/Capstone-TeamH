import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../firebase-config";

const MoodTracker = () => {
  const [mood, setMood] = useState("");
  const [emojiWiggle, setEmojiWiggle] = useState(false);

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
    <div className="flex flex-col items-center">
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
            onClick={() => setMood("😊")}
            className={"text-5xl mr-5 cursor-pointer"}
          >
            😊
          </span>
          <span
            role="img"
            aria-label="Sad"
            onClick={() => setMood("😢")}
            className={"text-5xl mr-5 cursor-pointer"}
          >
            😢
          </span>
          <span
            role="img"
            aria-label="Excited"
            onClick={() => setMood("😁")}
            className={"text-5xl mr-5 cursor-pointer"}
          >
            😁
          </span>
          <span
            role="img"
            aria-label="Stressed"
            onClick={() => [setMood("😰"), setEmojiWiggle(true)]}
            className={`${
              emojiWiggle && "animate-wiggle"
            } text-5xl mr-5 cursor-pointer`}
            onAnimationEnd={() => setEmojiWiggle(false)}
          >
            😰
          </span>
        </div>
        <p className="text-lg text-gray-600 mb-5 text-center pt-4">Mood submitted for today: {mood}</p>
        <button
          type="submit"
          className="mt-5 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition-colors duration-300"
        >
          Submit Mood
        </button>
      </form>
    </div>
  );
};

export default MoodTracker;
