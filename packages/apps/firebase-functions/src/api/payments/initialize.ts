import fetch from "node-fetch";
import { getGoPayApiUrl } from "../../helpers/goPay";

interface IResponseData {
    access_token?: string;
    errors?: { message: string }[];
}

const basicToken = Buffer.from("TOFILL", "utf-8").toString("base64");

export const initialize = (isDevMode: boolean): Promise<IResponseData> =>
    fetch(`${getGoPayApiUrl(isDevMode)}/oauth2/token`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${basicToken}`,
        },
        // @ts-ignore
        body: new URLSearchParams({
            scope: "payment-all",
            grant_type: "client_credentials",
        }),
    }).then((response) => response.json());
