import { IContext } from "@nx-stack/types";
import { createContext } from "react";

export const initialContext: IContext = {
    user: undefined,
    currentRoute: undefined,
    isGlobalLoading: false,
    isScrollDisabled: false,
    isCookiesAllowed: false,
    setIsGlobalLoading: () => {},
    setCurrentRoute: () => {},
    setIsCookiesAllowed: () => {},
    setIsScrollDisabled: () => {},
};

export const Context = createContext(initialContext);
