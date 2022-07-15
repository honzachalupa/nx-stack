import {
    EEndpoints,
    IPaymentCreateResponseData,
    IPaymentData,
    IPaymentGetResponseData,
    IResponse,
} from "@nx-stack/types";
import { api } from "../helpers/api";
import { isDev } from "../helpers/app";

export const PaymentsActions = {
    create: (
        data: IPaymentData,
    ): Promise<IResponse<IPaymentCreateResponseData>> =>
        api.post(EEndpoints.PAYMENT_GATEWAY.CREATE_PAYMENT, {
            ...data,
            isDevMode: isDev,
        }),

    get: (id: number): Promise<IResponse<IPaymentGetResponseData>> =>
        api.post(EEndpoints.PAYMENT_GATEWAY.GET_PAYMENT, {
            id,
            isDevMode: isDev,
        }),
};
