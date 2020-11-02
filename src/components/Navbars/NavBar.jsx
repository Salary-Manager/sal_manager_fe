import { navigate, usePath } from "hookrouter";
import React, { useEffect, useState } from "react";
// import Footer from "../common/Footer";
import img from "./logo/mitslogo.png";
import logoBlack from "./logo/logo512.png";

const NavBar = ({ menus, pages }) => {
    const path = usePath();
    const url = path.split("/");
    const [drawer, setDrawer] = useState(false);
    const [maintitle, setmaintitle] = useState(false);
    useEffect(() => {
        menus.forEach((item) => {
            const parts = item.link.split("/");
            const selectedClasses = url.includes(parts && parts[1]);
            if (selectedClasses) {
                setmaintitle(item.title);
                return;
            }
        });
    }, [pages]);
    const close = () => {
        var el = document.getElementById("sidebar");
        el.classList.remove("navSlide");
        el.classList.add("navClose");
        document.getElementById("sidebaroverlay").classList.add("fadeOut");
        setTimeout(() => el.classList.add("hidden"), 700);
    };
    return (
        <div className="h-screen flex  bg-gray-200">
            {drawer && (
                <div className="md:hidden">
                    <div
                        id="sidebaroverlay"
                        className="fixed inset-0 flex fadeIn z-40"
                        onClick={(_) => {
                            close();
                            setTimeout((_) => setDrawer(false), 500);
                        }}>
                        <div className="fixed inset-0">
                            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
                        </div>
                        <div
                            id="sidebar"
                            className="navSlide relative flex-1 flex flex-col max-w-xs w-full pb-4 bg-white">
                            <div className="absolute top-0 right-0 -mr-14 p-1">
                                <button
                                    onClick={(_) => {
                                        close();
                                        setTimeout(
                                            (_) => setDrawer(false),
                                            500
                                        );
                                    }}
                                    className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-red-600"
                                    aria-label="Close sidebar">
                                    <svg
                                        className="h-6 w-6 text-red-800"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-shrink-0 h-16 border-b-2 border-gray-200 flex items-center px-4">
                                <a href="/">
                                    <img
                                        className="h-20 w-auto"
                                        src={img}
                                        alt="Logo"
                                    />
                                </a>
                            </div>
                            <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                <nav className="px-2">
                                    {menus.map((item) => {
                                        const parts = item.link.split("/");
                                        const selectedClasses = url.includes(
                                            parts && parts[1]
                                        )
                                            ? "mt-2 group flex w-full items-center px-2 py-2 text-base leading-5 font-medium text-white rounded-md bg-red-800 focus:outline-none focus:bg-red-800 transition ease-in-out duration-150"
                                            : "mt-2 group flex w-full items-center px-2 py-2 text-base leading-5 font-medium text-red-800 rounded-md hover:text-white hover:bg-red-700 focus:outline-none focus:bg-red-900 transition ease-in-out duration-150";
                                        return (
                                            <a
                                                key={item.title}
                                                onClick={() =>
                                                    navigate(item.link)
                                                }
                                                className={selectedClasses}>
                                                <i
                                                    className={
                                                        item.icon +
                                                        (url.includes(
                                                            parts && parts[1]
                                                        )
                                                            ? " text-white"
                                                            : " text-red-400") +
                                                        " mr-3 text-md group-hover:text-red-300 group-focus:text-red-300 transition ease-in-out duration-150"
                                                    }></i>
                                                {item.title}
                                            </a>
                                        );
                                    })}
                                </nav>
                            </div>
                            <div className="flex-shrink-0 flex border-t border-red-700 p-4">
                                <a
                                    href="#"
                                    className="flex-shrink-0 w-full group block">
                                    <div className="flex items-center">
                                        <div>
                                            <div className="rounded-full h-8 w-8 flex items-center bg-white justify-center">
                                                <i className="inline-block fas fa-user text-xl text-red-700"></i>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm leading-5 font-medium text-white">
                                                loginUser
                                            </p>
                                            <p
                                                onClick={() => {
                                                    localStorage.removeItem(
                                                        "login_access_token"
                                                    );
                                                    localStorage.removeItem(
                                                        "login_refresh_token"
                                                    );
                                                    navigate("/login");
                                                    window.location.reload();
                                                }}
                                                className="text-xs leading-4 font-medium text-red-700 group-hover:text-red-800 transition ease-in-out duration-150">
                                                Sign Out
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-14"></div>
                    </div>
                </div>
            )}

            <div
                id="sidebar2"
                className="hidden md:flex md:flex-shrink-0 border-r-2 border-gray-200">
                <div className="flex flex-col w-64 bg-white ">
                    <div className="flex items-center border-b-2 h-12 mt-2 border-gray-200  flex-shrink-0 px-4">
                        <a href="/">
                            <img
                                className="h-20 mx-auto w-auto"
                                src={img}
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <div className="mt-5 h-0 flex-1 flex flex-col overflow-y-auto">
                        <nav className="flex-1 px-2 bg-white">
                            {menus.map((item) => {
                                const parts = item.link.split("/");
                                const selectedClasses = url.includes(
                                    parts && parts[1]
                                )
                                    ? "mt-2 group flex w-full items-center px-2 py-2 text-base leading-5 font-medium text-white rounded-md bg-red-800 focus:outline-none focus:bg-red-800 transition ease-in-out duration-150"
                                    : "mt-2 group flex w-full items-center px-2 py-2 text-base leading-5 font-medium text-red-700 rounded-md hover:text-white hover:bg-red-700 focus:outline-none focus:bg-red-900 transition ease-in-out duration-150";
                                return (
                                    <button
                                        key={item.title}
                                        onClick={() => navigate(item.link)}
                                        className={selectedClasses}>
                                        <i
                                            className={
                                                item.icon +
                                                (url.includes(parts && parts[1])
                                                    ? " text-white"
                                                    : " text-red-400") +
                                                " mr-3 text-lg group-hover:text-red-300 group-focus:text-red-300 transition ease-in-out duration-150"
                                            }></i>
                                        {item.title}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                    <div className="flex-shrink-0 flex border-t border-red-700 p-4">
                        <a
                            href="#"
                            className="flex-shrink-0 w-full group block">
                            <div className="flex items-center">
                                <div>
                                    <div className="rounded-full h-8 w-8 flex items-center bg-white justify-center">
                                        <i className="inline-block fas fa-user text-xl text-red-700"></i>
                                    </div>
                                </div>
                                <div className="ml-3">
                                    {/* <p className="text-sm leading-5 font-medium text-white">
                                        loginUser
                                    </p> */}
                                    <p
                                        onClick={() => {
                                            localStorage.removeItem(
                                                "login_access_token"
                                            );
                                            localStorage.removeItem(
                                                "login_refresh_token"
                                            );
                                            navigate("/login");
                                            window.location.reload();
                                        }}
                                        className="text-xs leading-4 font-medium text-red-800 group-hover:text-red-100 transition ease-in-out duration-150">
                                        Sign Out
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full flex-1 overflow-hidden">
                <div className="flex md:hidden relative z-10 flex-shrink-0 h-16 bg-white">
                    <button
                        onClick={(_) => setDrawer(true)}
                        className="px-4 border-r border-gray-200 bg-white text-red-700 focus:outline-none focus:bg-transparent focus:text-red-700 md:hidden"
                        aria-label="Open sidebar">
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </button>
                    <span className="my-auto pl-2 truncate">{maintitle}</span>
                    <a
                        href="/"
                        className="md:hidden ml-auto flex h-full items-center px-4">
                        <img
                            className="h-12 w-auto"
                            src={logoBlack}
                            alt="Logo"
                        />
                    </a>
                </div>

                <main className="relative z-0  pb-4 md:py-0 focus:outline-none">
                    <div
                        style={{ height: "3.5rem" }}
                        className="hidden md:flex w-full sticky bg-white border-b-2 border-red-600 z-10">
                        <span className="px-6 flex py-2 w-1/2 my-auto text-lg text-black">
                            {maintitle}
                        </span>
                        <span className=" flex  w-1/2">
                            <img
                                className="h-12 fixed pr-10 right-0"
                                src={logoBlack}
                                alt="Logo"
                            />
                        </span>
                    </div>

                    <div className="flex  max-w-7xl mx-auto ">
                        <div className="w-full">{pages}</div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default NavBar;
