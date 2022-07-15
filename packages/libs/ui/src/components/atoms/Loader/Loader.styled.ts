import { Loader } from "@honzachalupa/ui";
import styled from "styled-components";

export const StyledLoader = styled(Loader)`
    svg {
        fill: ${({ theme }) => theme.colors.accentPrimary};
        color: ${({ theme }) => theme.colors.accentPrimary};
    }
`;
