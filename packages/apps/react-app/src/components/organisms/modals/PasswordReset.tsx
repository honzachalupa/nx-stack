import { IModalRefProps, Modal, Title } from "@nx-stack/ui";
import { forwardRef, RefAttributes } from "react";
import { Form_PasswordReset } from "../forms/PasswordReset";

export interface IProps {
    emailAddress: string | undefined;
    onSubmit: () => void;
}

export const Modal_PasswordReset: React.FC<
    IProps & RefAttributes<IModalRefProps>
> = forwardRef(({ emailAddress, onSubmit }, ref) => (
    <Modal ref={ref}>
        <Title level={3} alignment="left">
            Resetovat heslo
        </Title>

        <Form_PasswordReset emailAddress={emailAddress} onSubmit={onSubmit} />
    </Modal>
));
