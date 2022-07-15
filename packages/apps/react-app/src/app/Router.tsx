import { Fragment } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import authenticationRoutes from "../pages/Authentication/Authentication.routes";
import homeRoutes from "../pages/Home/Home.routes";
import notFoundRoutes from "../pages/NotFound/NotFound.routes";

export const Router: React.FC = () => {
    const routes = [...homeRoutes, ...authenticationRoutes, ...notFoundRoutes];

    return (
        <BrowserRouter>
            <Routes
                children={routes.map((route, i) => (
                    <Fragment key={i}>{route}</Fragment>
                ))}
            />
        </BrowserRouter>
    );
};
