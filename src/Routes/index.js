import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "../pages/MainPage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ResetPassword from "../pages/ResetPassword";
import {NotFound} from "../pages/NotFound";
import Jobs from "../pages/Jobs";
import Discover from "../pages/Dsicover";
import AboutUs from "../pages/AboutUs";
import MainPageLogin from "../pages/MainPageLogin";

const routes = [
    {
        path: "/",
        exact: true,
        component: MainPage,
    },
    {
        path: "/sign-in",
        exact: true,
        component: SignIn,
    },
    {
        path: "/sign-up",
        component: SignUp,
    },
    {
        path: "/reset-password",
        component: ResetPassword,
    },
    {
        path: "/jobs",
        exact: true,
        component: Jobs,
    },
    {
        path: "/discover",
        exact: true,
        component: Discover,
    },
    {
        path: "/about",
        exact: true,
        component: AboutUs,
    },
        {
        path: "/user-mainPage",
        exact: true,
        component: MainPageLogin,
    },
    {
        // Catch-all must be last
        component: NotFound,
    },
];

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {routes.map((routeData) => {
                        const {path} = routeData;
                        return <Route key={path || "404"} {...routeData} />;
                    })}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
