import { ITheme } from "@honzachalupa/ui";

const colors: ITheme["colors"] = {
    accentPrimary: "#731ecd",
    accentSecondary: "#ff6348",
    black: "black",
    white: "white",
    grayLight: "#cfcfd1",
    grayDark: "#1c202a",
    green: "#1fb141",
    red: "#e60000",
    blueLight: "#4dc5d7",
    blueDark: "#21b7cd",
};

export const theme: ITheme = {
    colors,
    background: "#F7F8FB",
    fonts: {
        primary: "'GraphikRegular', sans-serif",
        secondary: "'GraphikRegular', sans-serif",
    },
    fontColors: {
        black: colors.black,
        white: colors.white,
        faded: colors.grayDark,
    },
    breakpoints: {
        sm: "600px",
        md: "1100px",
    },
    footer: {
        light: "#b7e1de",
        dark: "#9dcfc6",
    },
    input: {
        border: {
            radius: 8,
        },
    },
    button: {
        border: {
            radius: 8,
        },
    },
};
