import { CopyButton as CopyButtonCore } from "@honzachalupa/ui";
import React from "react";

export interface IProps {
    value: string | number;
    className?: string;
}

export const CopyButton: React.FC<IProps> = ({ value, className }) => {
    return (
        <CopyButtonCore
            value={value}
            copyText="Kopírovat"
            copiedText="Zkopírování"
            className={className}
        />
    );
};
