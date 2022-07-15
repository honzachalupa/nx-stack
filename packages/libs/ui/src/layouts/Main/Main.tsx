import { Context } from "@nx-stack/utils";
import { useContext } from "react";
import { CookieBanner, Loader } from "../..";
import { Header } from "./components/Header";
import { StyledContent, StyledContentContainer } from "./Main.styled";

export interface IProps {
    children: React.ReactNode;
}

export const Layout_Main: React.FC<IProps> = ({ children }) => {
    const { isGlobalLoading } = useContext(Context);

    return (
        <div>
            <Header />

            <StyledContentContainer>
                <StyledContent>{children}</StyledContent>

                <CookieBanner />
            </StyledContentContainer>

            {isGlobalLoading && <Loader isFullscreen />}
        </div>
    );
};
