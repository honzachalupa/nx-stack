import { ERoutePaths } from "../enumerators/routes";

export interface ICurrentRoute {
    id: string | undefined;
    path: ERoutePaths | undefined;
}
