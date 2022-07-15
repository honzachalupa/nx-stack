import { ERoles } from "../enumerators/roles";

export interface ISignedUser {
    id: string;
    emailAddress: string;
    firstName: string;
    lastName: string;
    createdDate: string;
    updatedDate: string;
    role: ERoles;
}
