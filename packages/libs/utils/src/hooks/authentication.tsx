import { ERoles, IContext } from "@nx-stack/types";
import { useContext } from "react";
import { Context } from "../helpers/context";

export const useAuthentication = () => {
    const { user } = useContext<IContext>(Context);

    const isUserAuthenticated = !!user;

    return {
        user,
        isAdmin: user?.role === ERoles.ADMIN,
        isUserAuthenticated,
    };
};
