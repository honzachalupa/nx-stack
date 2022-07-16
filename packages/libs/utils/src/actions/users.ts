import {
    convertDocsToItems,
    convertDocToItem,
    TQuery,
} from "@honzachalupa/firebase";
import { ERoles, ISignedUser } from "@nx-stack/types";
import { Collections, Database } from "../helpers/firebase";
import { log } from "../helpers/logging";

export const UsersActions = {
    create: (id: string, emailAddress: string) =>
        Database.set(Collections.users, id, {
            emailAddress,
            role: ERoles.USER,
        }),

    update: (
        id: string,
        data: {
            firstName: string;
            lastName: string;
            izo: string;
            schoolName: string;
        },
    ) => Database.update(Collections.users, id, data),

    get: (id: ISignedUser["id"]): Promise<ISignedUser> =>
        Database.get(Collections.users, id)
            .then(convertDocToItem)
            .catch((error) => {
                log({
                    code: "EXCEPTION",
                    scope: "UsersActions",
                    error,
                });

                return null as any;
            }),

    search: (query?: TQuery): Promise<ISignedUser[]> =>
        Database.search(Collections.users, query)
            .then(convertDocsToItems)
            .catch((error) => {
                log({
                    code: "EXCEPTION",
                    scope: "UsersActions",
                    error,
                });

                return [];
            }),

    setRole: (id: string, role: ERoles) =>
        Database.update(Collections.users, id, { role }),
};
