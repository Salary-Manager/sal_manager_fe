import React from "react";
import "../styles/Loader.css";
const img = "";
export const Loading = () => {
    return (
        <div className=" overflow-hidden">
            <div className="overflow-hidden text-center justify-center ">
                <div className="loader p-10">
                    <svg className="circular w-16" viewBox="25 25 50 50">
                        <circle
                            className="path"
                            cx="50"
                            cy="50"
                            r="20"
                            fill="none"
                            strokeWidth="4"
                            strokeMiterlimit="10"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export const FullLoading = ({ color = "gray-white" }) => {
    return (
        <div
            className={`h-screen w-full items-center flex flex-col justify-center overflow-hidden bg-${color}`}>
            <Loading />
        </div>
    );
};
