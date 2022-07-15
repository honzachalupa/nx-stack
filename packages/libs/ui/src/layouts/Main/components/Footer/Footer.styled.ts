import styled from "styled-components";
import { Button } from "../../../../";

export const StyledContainer = styled.div`
    padding: 20px 0;
`;

export const StyledCopyright = styled.p`
    font-size: 13px;
    text-align: center;
    margin-bottom: 10px;
`;

export const StyledTermsAndConditions = styled.p`
    font-size: 13px;
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
`;

export const StyledButton = styled(Button)`
    min-width: auto;
    color: ${({ theme }) => theme.fontColors.faded};
    font-size: 13px;
    font-weight: 400;
    text-transform: none;
    box-shadow: none;
    padding: 10px;
`;
