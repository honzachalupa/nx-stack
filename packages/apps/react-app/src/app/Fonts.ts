import { createGlobalStyle } from "styled-components";

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: "GraphikExtralight";
        src: local("GraphikExtralight"), url("./assets/fonts/Graphik/Extralight.otf") format("opentype");
    }

    @font-face {
        font-family: "GraphikRegular";
        src: local("GraphikRegular"), url("./assets/fonts/Graphik/Regular.otf") format("opentype");
    }

    @font-face {
        font-family: "GraphikSemibold";
        src: local("GraphikSemibold"), url("./assets/fonts/Graphik/Semibold.otf") format("opentype");
    }

`;
