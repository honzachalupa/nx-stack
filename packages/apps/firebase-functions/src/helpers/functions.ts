import { Response } from "express";
import * as functions from "firebase-functions";
import "firebase-functions/lib/logger";

export const initFunction = (docPath: string) =>
    functions.region("europe-west3").firestore.document(docPath);

export const initScheduledFunction = (schedule: string) =>
    functions
        .region("europe-west3")
        .pubsub.schedule(schedule)
        .timeZone("Europe/Prague");

export const sendResponse = (
    response: Response,
    {
        data,
        errorMessage,
    }: {
        data?: any;
        errorMessage?: string;
    },
) => {
    if (data) {
        response.status(200).send({
            data,
            isSuccess: true,
        });
    } else {
        response.status(500).send({
            error: errorMessage,
            isSuccess: false,
        });
    }
};
