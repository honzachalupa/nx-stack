import { Button, Layout_Main, Title } from "@nx-stack/ui";
import { Authentication, log, useCurrentPage } from "@nx-stack/utils";

export const Page_AuthenticationSignOut: React.FC = () => {
    const { title, navigateTo } = useCurrentPage({ title: "Sign Out" });

    const handleSignOut = () =>
        Authentication.signOut()
            .then(() => navigateTo.home())
            .catch((error) => {
                log({
                    code: "EXCEPTION",
                    scope: "Page_AuthenticationSignOut",
                    error,
                });
            });

    return (
        <Layout_Main>
            <Title level={1} alignment="left">
                {title}
            </Title>

            <Button label="Sign Out" onClick={handleSignOut} />
        </Layout_Main>
    );
};
