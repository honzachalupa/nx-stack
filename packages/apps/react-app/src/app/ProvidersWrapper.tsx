import { IContext } from "@nx-stack/types";
import { GlobalStyle, theme } from "@nx-stack/ui";
import { Context } from "@nx-stack/utils";
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { Fonts } from "./Fonts";

interface IProps {
    context: IContext;
    children: ReactNode;
}

export const ProvidersWrapper: React.FC<IProps> = ({ context, children }) => (
    <ThemeProvider theme={theme}>
        <Fonts />

        <GlobalStyle
            theme={theme}
            isScrollDisabled={context.isScrollDisabled}
        />

        <Context.Provider value={context}>{children}</Context.Provider>
    </ThemeProvider>
);
