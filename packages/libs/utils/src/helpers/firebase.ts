import { FirebaseConnector, Firestore } from "@honzachalupa/firebase";
import { log } from "./logging";

const { firestore, ...connector } = new FirebaseConnector(
    {
        apiKey: process.env["NX_FIREBASE_API_KEY"],
        authDomain: process.env["NX_FIREBASE_AUTH_DOMAIN"],
        projectId: process.env["NX_FIREBASE_PROJECT_ID"],
        storageBucket: process.env["NX_FIREBASE_STORAGE_BUCKET"],
        messagingSenderId: process.env["NX_FIREBASE_MESSAGING_SENDER_ID"],
        appId: process.env["NX_FIREBASE_APP_ID"],
        measurementId: process.env["NX_FIREBASE_MEASUREMENT_ID"],
    },
    log,
);

export const where = Firestore.where;
export const limit = Firestore.limit;
export const orderBy = Firestore.orderBy;
export const Authentication = connector.Authentication;
export const Database = connector.Database;
export const Storage = connector.Storage;
export const Analytics = connector.Analytics;

export const Collections = {
    users: Firestore.collection(firestore, "users"),
};
