import React, { useState } from "react";
import { A, navigate } from "hookrouter";
import img from "./logo/mitslogo.png";
export default function PublicNavBar() {
    const [shown, setShown] = useState(false);
    const links = [
        {
            link: "/",
            title: "Home",
        },
        {
            link: "/login",
            title: "Login",
        },
    ];

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white">
            <A href="/">
                <div className="flex-shrink-0 h-16 flex items-center px-4">
                    {/* <img className="h-20 w-auto" src={img} alt="Logo" /> */}
                </div>
            </A>
            <div className="block lg:hidden py-6 pr-6">
                <button
                    onClick={() => setShown(!shown)}
                    className="flex items-center px-3 py-2 border outline-none rounded text-red-600 border-red-400 hover:text-red hover:border-red">
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                className={`w-full ${
                    shown ? "block" : "hidden"
                } flex-grow lg:flex lg:items-center lg:w-auto lg:justify-center lg:bg-white bg-white pb-6 lg:p-6`}>
                <div className="text-sm lg:flex-grow flex flex-col lg:flex-row">
                    {links &&
                        links.map((el) => (
                            <A
                                key={el.title}
                                onClick={() => setShown(!shown)}
                                className="block lg:inline-block lg:mt-0 text-red-600 hover:text-red-600 pr-20 lg:px-4 py-2 text-right lg:text-left lg:hover:bg-white hover:bg-white"
                                href={el.link}>
                                {el.title}
                            </A>
                        ))}
                </div>
            </div>
        </nav>
    );
}
