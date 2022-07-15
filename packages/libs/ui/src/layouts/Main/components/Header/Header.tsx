import React from "react";
import { Navigation } from "../Navigation";
import { StyledContainer } from "./Header.styled";

export const Header: React.FC = () => (
    <StyledContainer>
        <Navigation />
    </StyledContainer>
);
