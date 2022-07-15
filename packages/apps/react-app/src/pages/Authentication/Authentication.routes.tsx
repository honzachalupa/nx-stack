import { ERoutePaths } from "@nx-stack/types";
import { Route } from "react-router-dom";
import { Page_AuthenticationSignIn } from "./SignIn";
import { Page_AuthenticationSignOut } from "./SignOut";
import { Page_AuthenticationSignUp } from "./SignUp";

export default [
    <Route
        path={ERoutePaths.AUTHENTICATION_SIGN_UP}
        element={<Page_AuthenticationSignUp />}
    />,

    <Route
        path={ERoutePaths.AUTHENTICATION_SIGN_IN}
        element={<Page_AuthenticationSignIn />}
    />,

    <Route
        path={ERoutePaths.AUTHENTICATION_SIGN_OUT}
        element={<Page_AuthenticationSignOut />}
    />,
];
