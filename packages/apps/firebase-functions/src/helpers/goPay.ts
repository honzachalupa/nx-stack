export const getGoPayApiUrl = (isDevMode: boolean) =>
    isDevMode
        ? "https://gw.sandbox.gopay.com/api"
        : "https://gate.gopay.cz/api";
