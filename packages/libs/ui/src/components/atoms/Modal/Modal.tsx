import {
    IModalProps,
    IModalRefProps,
    Modal as ModalCore,
} from "@honzachalupa/ui";
import { forwardRef, RefAttributes } from "react";

export const Modal: React.FC<
    Omit<IModalProps, "closeButtonText"> & RefAttributes<IModalRefProps>
> = forwardRef((props, ref) => (
    <ModalCore ref={ref} {...props} closeButtonText="Zavřít" />
));
