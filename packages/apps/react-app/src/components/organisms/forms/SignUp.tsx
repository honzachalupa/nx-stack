import { EPatterns, IFormInput } from "@nx-stack/types";
import { Form, Loader } from "@nx-stack/ui";
import {
    Authentication,
    log,
    useNavigation,
    UsersActions,
} from "@nx-stack/utils";
import { Fragment, useMemo, useState } from "react";

interface IFormData {
    emailAddress: string;
    password: string;
}

export const Form_SignUp: React.FC = () => {
    const navigateTo = useNavigation();

    const [isLoading, setIsLoading] = useState<boolean>();

    const handleSubmit = ({ emailAddress, password }: IFormData) => {
        setIsLoading(true);

        Authentication.createUserWithEmailAndPassword(emailAddress, password)
            .then(({ user }) => {
                UsersActions.create(user.uid, emailAddress)
                    .then(navigateTo.home)
                    .catch((error) => {
                        log({
                            code: "EXCEPTION",
                            scope: Form_SignUp.name,
                            error,
                        });
                    });
            })
            .catch((error: any) => {
                log({
                    code: "EXCEPTION",
                    scope: Form_SignUp.name,
                    error,
                });
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Fragment>
            <Form
                inputs={useMemo<IFormInput[]>(
                    () => [
                        {
                            id: "emailAddress",
                            label: "E-mail address",
                            controlType: "input",
                            inputType: "email",
                            rules: {
                                required: true,
                                pattern: EPatterns.EMAIL_ADDRESS,
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
                        },
                    ],
                    [],
                )}
                buttonsRenderer={(submit) => [
                    {
                        label: "Sign Up",
                        testId: "SignUp",
                        onClick: submit,
                    },
                ]}
                onSubmit={handleSubmit}
            />

            {isLoading && <Loader isFullscreen />}
        </Fragment>
    );
};
