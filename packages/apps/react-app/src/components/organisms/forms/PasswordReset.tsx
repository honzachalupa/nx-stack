import { IFormInput } from "@nx-stack/types";
import { Form } from "@nx-stack/ui";
import { Authentication } from "@nx-stack/utils";
import { useMemo, useState } from "react";

export interface IProps {
    emailAddress: string | undefined;
    onSubmit: () => void;
}

interface IFormData {
    emailAddress: string;
}

export const Form_PasswordReset: React.FC<IProps> = ({
    emailAddress,
    onSubmit,
}) => {
    const [errorCode, setErrorCode] = useState<string>();

    const errorMessage = useMemo(
        // TODO
        () => (errorCode ? errorCode : null),
        [errorCode],
    );

    const handleSubmit = ({ emailAddress }: IFormData) => {
        Authentication.sendPasswordResetEmail(emailAddress as string)
            .then(onSubmit)
            .catch((error: any) => {
                // TOFILL: Remove "any"
                setErrorCode(error.code);
            });
    };

    return (
        <Form
            inputs={useMemo<IFormInput[]>(
                () => [
                    {
                        id: "emailAddress",
                        label: "E-mailová adresa",
                        value: emailAddress,
                        controlType: "input",
                        rules: {
                            required: true,
                        },
                    },
                ],
                [errorMessage],
            )}
            buttonsRenderer={(submit) => [
                {
                    label: "Resetovat",
                    onClick: submit,
                },
            ]}
            onSubmit={handleSubmit}
        />
    );
};
