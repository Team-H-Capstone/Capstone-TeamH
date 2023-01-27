import React from "react";
import {Link} from "react-router-dom";
import ForumIcon from '@mui/icons-material/Forum';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Notepad from "./Notepad";

const MyDashboard = () => {
    return (
        <div className="w-full h-screen flex flex-row" style={{background:"white"}}>
         <section
         className="top-0 left-0 w-72 bg-[#bcb8b1] h-full border-r overflow overflow-auto pt-24"
         >
            <div className="flex flex-col justify-center items-center">
                <img
                className="rounded-full"
                width="120"
                alt="creator"
                src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                />
                <h1 className="text-3xl font-bold text-[#463f3a] pt-4">
                    Hello, User Name!
                </h1>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex-grow pt-8">
                <ul className="flex flex-col space-y-4 text-xl">
                    <Link to="/forum">
                        <p href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#f8f9fa] text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span className="inline-flex justify-center items-center ml-4">
                        <ForumIcon />
                        </span>
                        <span className="ml-2 text-2xl tracking-wide truncate">Forum</span>
                        </p>
                    </Link>
                    <Link to="/calendar">
                        <p href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-[#f8f9fa] text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                        <span className="inline-flex justify-center items-center ml-4">
                        <CalendarMonthIcon />
                        </span>
                        <span className="ml-2 text-2xl tracking-wide truncate">Calendar</span>
                        </p>
                    </Link>
                </ul>
            </div>
         </section>
         <section
         className="flex-auto h-full pt-28 bg-[#f4f3ee]">
            Hello
            <Notepad />
         </section>
        </div>
    )
};

export default MyDashboard;