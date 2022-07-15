// export { onEventCreate } from "./onEventCreate";

import cors from "cors";
import express from "express";
import * as functions from "firebase-functions";
import { PaymentsAPI } from "./payments";

const app = express();

app.use(cors());

app.post("/payments/create", PaymentsAPI.create);
app.post("/payments/get", PaymentsAPI.get);

export const api = functions.region("europe-west3").https.onRequest(app);
