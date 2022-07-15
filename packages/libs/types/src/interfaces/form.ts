import { CSSProperties, ReactNode } from "react";

export interface IValidationRules {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validate?: (value: string | number) => string | undefined;
}

export interface IFormInput {
    id: string;
    label?: string;
    placeholder?: string;
    value?: string | number | boolean;
    children?: ReactNode;
    controlType: "input" | "textarea" | "select" | "custom";
    inputType?: "text" | "number" | "email" | "password" | "tel" | "date";
    options?: { id: string; label: string }[];
    rules?: IValidationRules;
    error?: string;
    isReadOnly?: boolean;
    containerStyle?: CSSProperties;
    inputStyle?: CSSProperties;
}
