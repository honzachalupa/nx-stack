import { Layout_Main, Link, Text, Title } from "@nx-stack/ui";
import { useCurrentPage } from "@nx-stack/utils";
import styled from "styled-components";
import { Form_SignUp } from "../../../components/organisms/forms/SignUp";

const StyledText = styled(Text)`
    position: relative;
    top: -30px;
`;

export const Page_AuthenticationSignUp: React.FC = () => {
    const { title, navigateTo } = useCurrentPage({ title: "Sign Up" });

    return (
        <Layout_Main>
            <Title level={1}>{title}</Title>

            <StyledText alignment="center">
                Already signed up?{" "}
                <Link label="Sign In" onClick={navigateTo.signIn} />
            </StyledText>

            <Form_SignUp />
        </Layout_Main>
    );
};
