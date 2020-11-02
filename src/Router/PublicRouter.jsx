import React from "react";
import { useRoutes, navigate, useRedirect } from "hookrouter";
import PublicNavBar from "../components/Navbars/PublicNavBar";
import Login from "../components/Account/Login";
// import Hotel from "../components/Browse/Hotel";
import ForgotPassword from "../components/Account/ForgotPassword";
import ResetPassword from "../components/Account/ResetPassword";
import LandingPage from "../components/common/LandingPage";
import Footer from "../components/common/Footer";
const routes = {
    "/home": () => <LandingPage />,
    "/login": () => <Login />,
    "/forgot-password": () => <ForgotPassword />,
    "/reset-password/:token": ({ token }) => <ResetPassword token={token} />,
};

const PublicRouter = () => {
    useRedirect("/", "/home");
    const pages = useRoutes(routes);
    !pages && navigate("/");
    return (
        <div className="relative bg-gray-200 min-h-screen ">
            {/* public navbar can go here */}
            <PublicNavBar />
            {pages}
            {!pages && (
                <div className="flex justify-center py-16">
                    Error 404: Page not found
                </div>
            )}
            {/* <Footer signUp={true} /> */}
        </div>
    );
};

export default PublicRouter;
