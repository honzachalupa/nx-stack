import { IFormInput } from "@nx-stack/types";
import { ButtonsGroup, Form, IModalRefProps, Link, Loader } from "@nx-stack/ui";
import { Authentication, useNavigation } from "@nx-stack/utils";
import { Fragment, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { Modal_PasswordReset } from "../modals/PasswordReset";

interface IFormData {
    emailAddress: string;
    password: string;
}

const StyledSignUpButtonsGroup = styled(ButtonsGroup)`
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
    }
`;

export const Form_SignIn: React.FC = () => {
    const navigateTo = useNavigation();

    const resetPasswordModalRef = useRef<IModalRefProps>(null);

    const [formData, setFormData] = useState<IFormData>();
    const [isLoading, setIsLoading] = useState<boolean>();
    const [errorCode, setErrorCode] = useState<string>();

    const errorMessage = useMemo(
        // TODO
        () => (errorCode ? errorCode : undefined),
        [errorCode],
    );

    const handleSubmit = ({ emailAddress, password }: IFormData) => {
        setIsLoading(true);

        Authentication.signInWithEmailAndPassword(emailAddress, password)
            .then(() => navigateTo.home())
            .catch((error: any) => {
                // TOFILL: Remove "any"
                setErrorCode(error.code);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Fragment>
            <Modal_PasswordReset
                ref={resetPasswordModalRef}
                emailAddress={formData?.emailAddress}
                onSubmit={() => {
                    resetPasswordModalRef.current?.hide();

                    alert("E-mail s instrukcemi byl odeslán.");
                }}
            />

            <Form
                inputs={useMemo<IFormInput[]>(
                    () => [
                        {
                            id: "emailAddress",
                            label: "E-mail address",
                            controlType: "input",
                            rules: {
                                required: true,
                            },
                        },
                        {
                            id: "password",
                            label: "Password",
                            controlType: "input",
                            inputType: "password",
                            rules: {
                                required: true,
                            },
                            error: errorMessage,
                        },
                        {
                            id: "password-reset",
                            controlType: "custom",
                            children: (
                                <Link
                                    label="Reset password"
                                    size="small"
                                    onClick={() =>
                                        resetPasswordModalRef.current?.show()
                                    }
                                />
                            ),
                        },
                    ],
                    [errorMessage],
                )}
                buttonsRenderer={(submit) => [
                    {
                        label: "Sign In",
                        testId: "SignIn",
                        onClick: submit,
                    },
                ]}
                onChange={setFormData}
                onSubmit={handleSubmit}
            />

            {isLoading && <Loader isFullscreen />}
        </Fragment>
    );
};
