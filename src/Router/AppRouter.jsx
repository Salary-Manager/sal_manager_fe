import { navigate, useRedirect, useRoutes } from "hookrouter";
import React from "react";
import Home from "../components/Dashboard/Home";
import NavBar from "../components/Navbars/NavBar";

const routes = {
    "/home": () => <Home />,
};

const links = [
    {
        link: "/home",
        title: "Home",
        icon: "",
    },
];
export default function AppRouter() {
    useRedirect("/", "/home");
    const pages = useRoutes(routes);
    !pages && navigate("/");
    return (
        <div className="">
            {/* <HODNavbar /> */}

            {!pages ? (
                <div className="h-screen flex justify-center py-16">
                    Error 404: Page not found
                </div>
            ) : (
                <NavBar pages={pages} menus={links} />
            )}
            {/* <Footer /> */}
        </div>
    );
}
