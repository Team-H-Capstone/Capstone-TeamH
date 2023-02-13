import React from "react";
import { Link } from "react-router-dom";
import ForumIcon from "@mui/icons-material/Forum";
import CreateIcon from '@mui/icons-material/Create';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Notepad from "./Notepad";
import MyThoughts from "./MyThoughts";
import MoodTracker from "./MoodTracker";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase-config";

const MyDashboard = () => {
  const [user] = useAuthState(auth);
  console.log("user--->", auth.currentUser);

  // top-0 left-0 

  return (
    <div
      className="w-full h-full flex flex-row bg-[#D4A373]"
    >
      <section 
        className="bg-[#D4A373] overflow overflow-auto pt-24 text-[#CCD5AE]"
        style={{ 	minWidth: "fit-content" }}
      >
        <div className="flex flex-col justify-center items-center">
          <img
            className="rounded-full"
            width="120"
            alt="creator"
            src="https://cityofgood.sg/wp-content/uploads/2020/11/mental-health-cover.png"
          />
          {user ? (
            <h1 className="text-3xl font-bold text-[#344E41] pt-4 px-6">
              Hello, {user?.displayName} 
            </h1>
          ) : (
            <h1 className="text-3xl font-bold text-[#344E41] pt-4 px-6">
              Hello, Guest 
            </h1>
          )}
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow pt-8">
          <ul className="flex flex-col space-y-4 text-xl">
            <Link to="/forum">
              <p
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none text-[#344E41] hover:bg-[#f8f9fa] hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <ForumIcon />
                </span>
                <span className="ml-2 text-2xl tracking-wide truncate">
                  Forum
                </span>
              </p>
            </Link>
            <Link to="/createpost">
              <p
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none text-[#344E41] hover:bg-[#f8f9fa] hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <CreateIcon />
                </span>
                <span className="ml-2 text-2xl tracking-wide truncate">
                  Create Post
                </span>
              </p>
            </Link>
            <Link to="/profile">
              <p
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none text-[#344E41] hover:bg-[#f8f9fa] hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                    <ManageAccountsIcon />
                </span>
                <span className="ml-2 text-2xl tracking-wide truncate">
                  Edit Profile
                </span>
              </p>
            </Link>
          </ul>
        </div>
      </section>
      <section className="flex flex-col w-full h-full pt-20 bg-[#DAD7CD] min-w-fit min-h-fit">
        <MoodTracker />
        <div className="flex flex-row flex justify-evenly min-w-fit mb-4 bg-[#DAD7CD]">
          <Notepad />
          <MyThoughts />
        </div>
      </section>
    </div>
  );
};

export default MyDashboard;
