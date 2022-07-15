export enum ERoutePaths {
    INDEX = "/",
    AUTHENTICATION_SIGN_UP = "/sign-up",
    AUTHENTICATION_SIGN_IN = "/sign-in",
    AUTHENTICATION_SIGN_OUT = "/sign-out",
    NOT_FOUND = "/not-found",
}

// Signed users
export const privatePaths = ["ERoutePaths.ACCOUNT"]; // Sample

// Signed users with admin role
export const adminPaths = ["ERoutePaths.ADMINISTRATION"]; // Sample
