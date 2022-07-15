import { IResponse } from "@nx-stack/types";
import fetch from "node-fetch";
import { isProd } from "./app";

export const apiUrl = isProd ? "" : "";

export const api = {
    post: (path: string, data: object): Promise<IResponse<any>> =>
        fetch(apiUrl + path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(async (response) => {
            const data = await response.json();

            if (response.ok) {
                return data;
            } else {
                throw data;
            }
        }),
};
