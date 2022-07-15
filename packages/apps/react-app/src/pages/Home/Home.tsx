import { Layout_Main, Title } from "@nx-stack/ui";
import { useCurrentPage } from "@nx-stack/utils";
import React from "react";
import { Sample } from "../../components/molecules/Sample";

export const Page_Home: React.FC = () => {
    const { title } = useCurrentPage({
        title: "Home",
    });

    return (
        <Layout_Main>
            <Title level={1}>{title}</Title>

            <Sample />
        </Layout_Main>
    );
};
