import { Context, initialContext } from "@nx-stack/utils";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../src";

const ProvidersWrapper: React.FC<{
    children: any;
}> = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} isScrollDisabled={false} />

        <Context.Provider value={initialContext}>
            <BrowserRouter>{children}</BrowserRouter>
        </Context.Provider>
    </ThemeProvider>
);

const withProviders = (Story: React.FC, context: any) => (
    <ProvidersWrapper>
        <Story {...context} />
    </ProvidersWrapper>
);

export const decorators = [withProviders];

export const parameters = {
    actions: { argTypesRegex: "^on.*" },
    options: {
        storySort: {
            order: ["Atoms", "Molecules", "Organisms"],
        },
    },
};
