import { useNavigation } from "@nx-stack/utils";
import { Button } from "../../../../components/atoms/Button";
import { StyledContainer } from "./Navigation.styled";

export const Navigation: React.FC = () => {
    const navigateTo = useNavigation();

    return (
        <StyledContainer>
            <Button label="Home" onClick={navigateTo.home} />
            <Button label="Sign In" onClick={navigateTo.signIn} />
            <Button label="Sign Up" onClick={navigateTo.signUp} />
            <Button label="Sign Out" onClick={navigateTo.signOut} />
        </StyledContainer>
    );
};
