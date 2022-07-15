// export { onEventCreate } from "./onEventCreate";

import { Request, Response } from "express";
import fetch from "node-fetch";
import { sendResponse } from "../../helpers/functions";
import { getGoPayApiUrl } from "../../helpers/goPay";
import { initialize } from "./initialize";

interface IRequestData {
    id: string;
    isDevMode: boolean;
}

const get = (data: IRequestData, accessToken: string) =>
    fetch(`${getGoPayApiUrl(data.isDevMode)}/payments/payment/${data.id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    }).then((response) => response.json());

export default async ({ body }: Request, response: Response) => {
    response.set("Access-Control-Allow-Origin", "*");

    const { access_token: accessToken, ...initialization } = await initialize(
        body.isDevMode,
    );

    if (accessToken) {
        const payment = await get(body, accessToken);

        if (payment) {
            sendResponse(response, {
                data: {
                    ...payment,
                    amount: payment.amount / 100,
                },
            });
        } else {
            sendResponse(response, { errorMessage: payment.errors[0].message });
        }
    } else {
        sendResponse(response, {
            errorMessage: initialization.errors?.[0].message,
        });
    }
};
