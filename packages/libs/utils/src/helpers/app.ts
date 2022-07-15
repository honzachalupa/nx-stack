export const isDev = process.env["NODE_ENV"] === "development";
export const isProd = process.env["NODE_ENV"] === "production";
export const isLocalhost = window.location.hostname === "localhost";
export const envUrl = window.location.origin;
