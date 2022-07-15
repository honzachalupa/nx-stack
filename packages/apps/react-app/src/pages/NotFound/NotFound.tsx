import { Layout_Main, Title } from "@nx-stack/ui";
import { useCurrentPage } from "@nx-stack/utils";

export const Page_NotFound: React.FC = () => {
    const { title } = useCurrentPage({
        title: "Not found",
    });

    return (
        <Layout_Main>
            <Title level={1}>{title}</Title>
        </Layout_Main>
    );
};
