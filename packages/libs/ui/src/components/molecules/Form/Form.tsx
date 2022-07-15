import { Form as FormCore } from "@honzachalupa/ui";
import { IComponentProps } from "@honzachalupa/ui/interfaces/component";
import { getTestId } from "@honzachalupa/utils";
import { IFormInput } from "@nx-stack/types";
import { forwardRef } from "react";
import { IButtonProps } from "../../../";

export interface IFormData {
    [key: string]: IFormInput["value"] | Array<IFormInput["value"]>;
}

export interface IFormRefProps {
    validate: () => void;
}

export interface IProps extends IComponentProps {
    inputs: (IFormInput | null)[];
    buttonsRenderer?: (onSubmit: any) => IButtonProps[];
    onChange?: (event: any) => void;
    onSubmit?: (formData: any) => void;
}

export const Form = forwardRef((props: IProps, ref) => (
    <FormCore
        ref={ref}
        validationTexts={{
            isRequired: "formValidationMessage_isRequired",
            maxLength: "formValidationMessage_maxLength",
            minLength: "formValidationMessage_minLength",
            pattern: "formValidationMessage_pattern",
        }}
        {...getTestId(Form.name)}
        {...props}
    />
));
