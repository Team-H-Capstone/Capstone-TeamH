import React from "react";
import Button from "@mui/material/Button";

const MyDashboard = () => {
    return (
        <div className="w-full h-screen">
         <section
         className="flex flex-row items-center w-full h-1/4 bg-[#dad7cd] text-[#344e41] pt-14"
         >
            <h1 className="text-5xl">
                Hello, User Name!
            </h1>
            <div>
                <Button>Forum</Button>
                <Button>Calendar</Button>
            </div>
         </section>
        </div>
    )
};

export default MyDashboard;