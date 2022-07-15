// export { onEventCreate } from "./onEventCreate";

import { IPaymentRequestData } from "@nx-stack/types";
import { Request, Response } from "express";
import fetch from "node-fetch";
import { sendResponse } from "../../helpers/functions";
import { getGoPayApiUrl } from "../../helpers/goPay";
import { initialize } from "./initialize";

interface IRequestData {
    orderId: number;
    amount: number;
    description: string;
    callbackUrl: string;
    isDevMode: boolean;
}

const create = (data: IRequestData, accessToken: string) =>
    fetch(`${getGoPayApiUrl(data.isDevMode)}/payments/payment`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            order_number: data.orderId.toString(),
            order_description: data.description,
            amount: data.amount * 100,
            currency: "CZK",
            target: {
                type: "ACCOUNT",
                goid: 0, // TOFILL
            },
            callback: {
                return_url: data.callbackUrl,
            },
        } as IPaymentRequestData),
    }).then((response) => response.json());

export default async ({ body }: Request, response: Response) => {
    response.set("Access-Control-Allow-Origin", "*");

    const { access_token: accessToken, ...initialization } = await initialize(
        body.isDevMode,
    );

    if (accessToken) {
        const payment = await create(body, accessToken);

        if (payment.state === "CREATED") {
            sendResponse(response, { data: payment });
        } else {
            sendResponse(response, { errorMessage: payment.errors[0].message });
        }
    } else {
        sendResponse(response, {
            errorMessage: initialization.errors?.[0].message,
        });
    }
};
