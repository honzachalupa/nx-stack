import { IContext, ICurrentRoute } from "@nx-stack/types";
import { Helmet, Loader } from "@nx-stack/ui";
import { initialContext } from "@nx-stack/utils";
import React, { useEffect, useState } from "react";
import { onFirstLoad, onRouteChange } from "./App.functions";
import { ProvidersWrapper } from "./ProvidersWrapper";
import { Router } from "./Router";

export const App: React.FC = () => {
    const [state, setState] = useState<IContext>(initialContext);

    const setContextProp = (key: keyof IContext, value: unknown) => {
        setState((prevState: IContext) => ({
            ...prevState,
            [key]: value,
        }));
    };

    useEffect(() => {
        onFirstLoad(setState);
    }, []);

    useEffect(() => {
        onRouteChange();
    }, [state.currentRoute]);

    const globalFunctions = {
        setIsGlobalLoading: (value: boolean) =>
            setContextProp("isGlobalLoading", value),
        setCurrentRoute: (value: ICurrentRoute) =>
            setContextProp("currentRoute", value),
        setIsScrollDisabled: (value: boolean) =>
            setContextProp("isScrollDisabled", value),
        setIsCookiesAllowed: (value: boolean) =>
            setContextProp("isCookiesAllowed", value),
    };

    return (
        <ProvidersWrapper context={{ ...state, ...globalFunctions }}>
            <Helmet />

            {state.user !== undefined ? <Router /> : <Loader />}
        </ProvidersWrapper>
    );
};
