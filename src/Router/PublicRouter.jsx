import React from "react";
import { useRoutes, navigate, useRedirect } from "hookrouter";
import Login from "../components/Account/Login";
// import Hotel from "../components/Browse/Hotel";
import ForgotPassword from "../components/Account/ForgotPassword";
import ResetPassword from "../components/Account/ResetPassword";
import LandingPage from "../components/common/LandingPage";
import Footer from "../components/common/Footer";
import NavBar from "../components/Navbars/NavBar";
const routes = {
    "/": () => <LandingPage />,
    "/login": () => <Login />,
    "/forgot-password": () => <ForgotPassword />,
    "/reset-password/:token": ({ token }) => <ResetPassword token={token} />,
};

const links = [
    {
        link: "/",
        title: "Home",
        icon: "",
    },
];

const PublicRouter = () => {
    const pages = useRoutes(routes);
    !pages && navigate("/");
    return (
        <div className="">
            {!pages ? (
                <div className="h-screen flex justify-center py-16">
                    Error 404: Page not found
                </div>
            ) : (
                <NavBar pages={pages} menus={links} />
            )}
        </div>
    );
};

export default PublicRouter;
