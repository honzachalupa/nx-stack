import { Button } from "@honzachalupa/ui";
import styled from "styled-components";

export const StyledButton = styled(Button)<{ accent?: string }>`
    &,
    &:hover {
        background-color: white;
        color: ${({ accent, theme }) => accent || theme.colors.accentPrimary};
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: 1px;
        outline: 2px solid
            ${({ accent, theme }) => accent || theme.colors.accentPrimary};
        outline-offset: -2px;
        border-radius: 6px;
        box-shadow: none;
    }
`;
