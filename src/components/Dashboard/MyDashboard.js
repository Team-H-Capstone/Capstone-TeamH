import React from "react";
import { Link } from "react-router-dom";
import ForumIcon from "@mui/icons-material/Forum";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Notepad from "./Notepad";
import MyThoughts from "./MyThoughts";
import MoodTracker from "./MoodTracker";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase-config";

const MyDashboard = () => {
  const [user] = useAuthState(auth);
  console.log("user--->", auth.currentUser);

  return (
    <div
      className="w-full h-screen flex flex-row"
      style={{ background: "white" }}
    >
      <section className="top-0 left-0 min-w-min bg-[#2b2d42] h-100% border-r overflow overflow-auto pt-24">
        <div className="flex flex-col justify-center items-center">
          <img
            className="rounded-full"
            width="120"
            alt="creator"
            src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
          />
          {user ? (
            <h1 className="text-3xl font-bold text-[#edf2f4] pt-4 px-4">
              Hello, {user?.displayName} !
            </h1>
          ) : (
            <h1 className="text-3xl font-bold text-[#edf2f4] pt-4">
              Hello, Guest !
            </h1>
          )}
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow pt-8">
          <ul className="flex flex-col space-y-4 text-xl">
            <Link to="/forum">
              <p
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none text-[#edf2f4] hover:bg-[#f8f9fa] hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <ForumIcon />
                </span>
                <span className="ml-2 text-2xl tracking-wide truncate">
                  Forum
                </span>
              </p>
            </Link>
            <Link to="/calendar">
              <p
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none text-[#edf2f4] hover:bg-[#f8f9fa] hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <CalendarMonthIcon />
                </span>
                <span className="ml-2 text-2xl tracking-wide truncate">
                  Calendar
                </span>
              </p>
            </Link>
            <Link to="/profile">
              <p
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none text-[#edf2f4] hover:bg-[#f8f9fa] hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                    <ManageAccountsIcon />
                </span>
                <span className="ml-2 text-2xl tracking-wide truncate">
                  Profile
                </span>
              </p>
            </Link>
          </ul>
        </div>
      </section>
      <section className="flex-auto h-full pt-28 bg-[#edf2f4]">
        <MoodTracker />
        <div className="flex flex-row justify-around">
          <Notepad />
          <MyThoughts />
        </div>
      </section>
    </div>
  );
};

export default MyDashboard;
