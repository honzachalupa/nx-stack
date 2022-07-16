import { getTestId } from "@honzachalupa/utils";
import { config } from "@nx-stack/utils";
import moment from "moment";
import React from "react";
import { StyledContainer, StyledCopyright } from "./Footer.styled";

export const Footer: React.FC = () => {
    return (
        <StyledContainer {...getTestId(Footer.name)}>
            <StyledCopyright>
                &copy; {moment().year()} {config.developerName}
            </StyledCopyright>
        </StyledContainer>
    );
};
