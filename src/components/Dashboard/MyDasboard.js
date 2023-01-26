import React from "react";
import {Link} from "react-router-dom";
import ForumIcon from '@mui/icons-material/Forum';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const MyDashboard = () => {
    return (
        <div className="w-full h-screen flex flex-row">
         <section
         className="top-0 left-0 w-72 bg-[#ced4da] h-full border-r overflow overflow-auto pt-28"
         >
            <div className="flex justify-center items-center">
                <h1 className="text-3xl font-bold text-[#212529]">
                    Hello, User Name!
                </h1>
            </div>
            <div className="overflow-y-auto overflow-x-hidden flex-grow pt-10">
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
         className="flex-auto bg-slate h-full pt-28">
            Container
         </section>
        </div>
    )
};

export default MyDashboard;