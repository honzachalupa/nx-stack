import {
    adminPaths,
    ERoutePaths,
    IContext,
    ICurrentRoute,
    privatePaths,
} from "@nx-stack/types";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Analytics, config } from "..";
import { Context } from "../helpers/context";
import { log } from "../helpers/logging";
import { useAuthentication } from "./authentication";
import { useNavigation } from "./navigation";

interface IProps {
    title?: string;
    isAnalyticsDisabled?: boolean;
}

export const useCurrentPage = ({ title, isAnalyticsDisabled }: IProps) => {
    const location = useLocation();
    const params = useParams();
    const navigateTo = useNavigation();
    const { user, isAdmin, isUserAuthenticated } = useAuthentication();

    const { isCookiesAllowed, setCurrentRoute } = useContext<IContext>(Context);

    const [route, setCurrentRouteState] = useState<ICurrentRoute>();

    useEffect(() => {
        window.document.title = title
            ? `${title} | ${config.name}`
            : config.name;

        const currentRoute: ICurrentRoute = {
            id:
                Object.entries(ERoutePaths)
                    .map(([id, path]) => ({
                        id,
                        pattern: new RegExp(
                            `^${path.replace(/:[a-z]*/gi, "[^/]+")}$`,
                        ),
                    }))
                    .find(({ pattern }) => pattern.test(location.pathname))
                    ?.id || undefined,
            path: undefined,
        };

        if (currentRoute.id) {
            currentRoute.path =
                ERoutePaths[currentRoute.id as keyof typeof ERoutePaths];

            if (currentRoute.path) {
                const isCurrentPathPrivate = privatePaths.includes(
                    currentRoute.path,
                );

                const isCurrentPathAdmin = adminPaths.includes(
                    currentRoute.path,
                );

                if (!isUserAuthenticated && isCurrentPathPrivate) {
                    navigateTo.signIn();
                } else if (!isAdmin && isCurrentPathAdmin) {
                    navigateTo.home();

                    log({
                        code: "SECURITY_BREACH",
                        scope: useCurrentPage.name,
                        message:
                            "Attempt to access administration without proper role.",
                        data: {
                            userId: user?.id,
                            role: user?.role,
                        },
                        isSilent: true,
                    });
                } else {
                    setCurrentRouteState(currentRoute);
                    setCurrentRoute(currentRoute);

                    if (isCookiesAllowed && !isAnalyticsDisabled) {
                        Analytics.setCurrentScreen(currentRoute.id);
                    }
                }
            } else {
                log({
                    code: "EXCEPTION",
                    scope: useCurrentPage.name,
                    message: "Attempt to access unknown path.",
                    data: {
                        currentRoute,
                    },
                });
            }
        } else {
            log({
                code: "EXCEPTION",
                scope: useCurrentPage.name,
                message: "Unable to determine page ID from pathname.",
                data: {
                    location,
                },
            });

            navigateTo.notFound();
        }
    }, [isCookiesAllowed]);

    return {
        title,
        user,
        route,
        location,
        params,
        navigateTo,
        isUserAuthenticated,
    };
};
