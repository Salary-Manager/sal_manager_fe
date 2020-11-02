import React, { useEffect, useState } from "react";
// import { A, navigate } from "hookrouter";
import { useSelector } from "react-redux";
function LandingPage() {
    const state = useSelector((reduxState) => reduxState);
    const { currentUser } = state;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className=" mt-4 sm:mt-24 pl-6 md:pl-12 lg-pl-24 pr-6 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full md:w-2/3">
                <h1 className="  w-full my-4 text-3xl md:text-5xl text-red-700 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                    Salary Manager
                </h1>
                <div className="flex ">
                    <p className="w-full leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
                        A web application developed by{" "}
                        <a className="text-red-600" href="">
                            SM
                        </a>{" "}
                        for managing the salary of employees.
                    </p>
                </div>
            </div>
        </div>
        // </div >
    );
}

export default LandingPage;
