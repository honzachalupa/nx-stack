import { Layout_Main, Link, Text, Title } from "@nx-stack/ui";
import { useCurrentPage } from "@nx-stack/utils";
import React from "react";
import styled from "styled-components";
import { Form_SignIn } from "../../../components/organisms/forms/SignIn";

const StyledText = styled(Text)`
    position: relative;
    top: -30px;
`;

export const Page_AuthenticationSignIn: React.FC = () => {
    const { title, navigateTo } = useCurrentPage({ title: "Sign In" });

    return (
        <Layout_Main>
            <Title level={1}>{title}</Title>

            <StyledText alignment="center">
                Not signed up yet?{" "}
                <Link label="Sign Up" onClick={navigateTo.signUp} />
            </StyledText>

            <Form_SignIn />
        </Layout_Main>
    );
};
