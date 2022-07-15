import { Firestore } from "@honzachalupa/firebase";
import credentialsDev from "../firebase.dev.json";
import credentialsProd from "../firebase.prod.json";
import { isDev } from "./app";

const credentials = isDev ? credentialsDev : credentialsProd;

// const { firestore, ...connector } = new FirebaseConnector(credentials, log); // TOFILL

export const where = Firestore.where;
export const limit = Firestore.limit;
export const orderBy = Firestore.orderBy;
export const Authentication = {} as any; // connector.Authentication; // TOFILL
export const Database = {} as any; // connector.Database; // TOFILL
export const Storage = {} as any; // connector.Storage; // TOFILL
export const Analytics = {} as any; // connector.Analytics; // TOFILL

export const Collections = {
    users: {} as any, // Firestore.collection(firestore, "users") // TOFILL
};
