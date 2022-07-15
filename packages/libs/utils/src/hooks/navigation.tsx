import { ERoutePaths, ISignedUser } from "@nx-stack/types";
import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
    const navigate = useNavigate();

    const path = (path: string, replace?: boolean) => {
        navigate(path, { replace });
    };

    const url = (url: string, newTab?: boolean) => {
        if (newTab) {
            window.open(url);
        } else {
            window.location.href = url;
        }
    };

    return {
        signUp: () => {
            navigate(ERoutePaths.AUTHENTICATION_SIGN_UP);
        },
        signIn: () => {
            navigate(ERoutePaths.AUTHENTICATION_SIGN_IN);
        },
        signOut: () => {
            navigate(ERoutePaths.AUTHENTICATION_SIGN_OUT);
        },
        home: () => {
            navigate(ERoutePaths.INDEX);
        },
        notFound: () => {
            navigate(ERoutePaths.NOT_FOUND);
        },
        mailClient: (emailAddress: ISignedUser["emailAddress"]) => {
            document.location.href = `mailto:${emailAddress}`;
        },
        path,
        url,
    };
};
