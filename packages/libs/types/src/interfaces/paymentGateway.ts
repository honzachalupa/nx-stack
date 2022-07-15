export interface IPaymentData {
    orderId: number;
    amount: number;
    description?: string;
    callbackUrl: string;
}

type TPaymentInstruments =
    | "PAYMENT_CARD"
    | "BANK_ACCOUNT"
    | "GPAY"
    | "APPLE_PAY"
    | "GOPAY"
    | "PAYPAL"
    | "MPAYMENT"
    | "PRSMS"
    | "PAYSAFECARD"
    | "BITCOIN"
    | "CLICK_TO_PAY";

type TPaymentStates =
    | "CREATED"
    | "PAID"
    | "CANCELED"
    | "PAYMENT_METHOD_CHOSEN"
    | "TIMEOUTED"
    | "AUTHORIZED"
    | "REFUNDED"
    | "PARTIALLY_REFUNDED";

export interface IPaymentRequestData {
    payer?: {
        allowed_payment_instruments?: TPaymentInstruments[];
        default_payment_instrument?: TPaymentInstruments;
        allowed_swifts?: string[];
        default_swift?: string;
        contact?: {
            first_name?: string;
            last_name?: string;
            email?: string;
            phone_number?: string;
            city?: string;
            street?: string;
            postal_code?: string;
            country_code?: string;
        };
    };
    target: {
        type: "ACCOUNT";
        goid: number;
    };
    items?: {
        type: "ITEM" | "DELIVERY" | "DISCOUNT";
        name: string;
        amount: number;
        count?: number;
        vat_rate?: string;
        ean?: number;
        product_url?: string;
    }[];
    amount: number;
    currency: "CZK";
    order_number: string;
    order_description?: string;
    lang?: "CS" | "SK" | "EN";
    callback: {
        return_url: string;
    };
    additional_params?: {
        name: string;
        value: string;
    }[];
    preauthorization?: boolean;
    recurrence?: {
        recurrence_cycle: "MONTH";
        recurrence_period: number;
        recurrence_date_to: string;
    };
}

export interface IPaymentCreateResponseData {
    id: number;
    order_number: string;
    state: "CREATED";
    amount: number;
    currency: "CZK";
    gw_url: string;
}

export interface IPaymentGetResponseData {
    id: number;
    order_number: string;
    state: TPaymentStates;
    amount: number;
    currency: "CZK";
}
