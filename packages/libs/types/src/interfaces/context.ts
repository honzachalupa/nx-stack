import { ICurrentRoute } from "./app";
import { ISignedUser } from "./user";

export interface IContext {
    user: ISignedUser | null | undefined;
    currentRoute: ICurrentRoute | undefined;
    isGlobalLoading: boolean;
    isScrollDisabled: boolean;
    isCookiesAllowed: boolean;
    setIsGlobalLoading: (value: boolean) => void;
    setCurrentRoute: (route: ICurrentRoute) => void;
    setIsScrollDisabled: (value: boolean) => void;
    setIsCookiesAllowed: (value: boolean) => void;
}
