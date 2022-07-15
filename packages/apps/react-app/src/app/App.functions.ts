import { initServiceWorker } from "@honzachalupa/utils";
import { config, isProd } from "@nx-stack/utils";

export const onFirstLoad = (setState: any) => {
    console.info(
        "Version:",
        PROJECT_VERSION,
        "\nBuild timestamp:",
        PROJECT_BUILD_TIMESTAMP,
        "\nMode:",
        isProd ? "Production" : "Development",
    );

    /* Authentication.onAuthStateChanged((user) => {
        if (user?.uid) {
            Analytics.setUserId(user.uid);

            UsersActions.get(user.uid)
                .then((user) => {
                    setState((prevState: IContext) => ({
                        ...prevState,
                        user,
                    }));
                })
                .catch((error) => {
                    log({
                        code: "EXCEPTION",
                        scope: "App",
                        error,
                    });
                });
        } else {
            setState((prevState: IContext) => ({
                ...prevState,
                user: null,
            }));
        }
    }); */

    if (config.caching && isProd) {
        initServiceWorker();
    }
};

export const onRouteChange = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
