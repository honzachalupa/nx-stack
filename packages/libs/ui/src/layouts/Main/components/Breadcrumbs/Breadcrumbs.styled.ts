import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../../../..";

export const StyledContainer = styled.div`
    margin: 20px 0;
`;

export const StyledLink = styled(NavLink)<{ isInactive: boolean }>`
    color: inherit;
    font-size: 16px;

    ${({ isInactive }) =>
        isInactive &&
        `
            opacity: 0.6;
            cursor: default;
        `}
`;

export const StyledIcon = styled(Icon)`
    height: 18px;
    display: inline-block;
    margin: 0 5px;
    position: relative;
    top: 3px;
`;
