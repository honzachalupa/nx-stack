import { CookieBanner as CookieBannerCore } from "@honzachalupa/ui";
import { IContext } from "@nx-stack/types";
import { Context } from "@nx-stack/utils";
import { useContext } from "react";

export const CookieBanner: React.FC = () => {
    const { setIsCookiesAllowed } = useContext<IContext>(Context);

    return (
        <CookieBannerCore
            headline="Do you agree to the use of analytical cookies?"
            content="We use these files to measure and analyze traffic to our website (number of visitors, pages viewed, average viewing time, etc.), which helps us improve its operation and develop new features for you. By agreeing, you are helping us to obtain valuable data about how you use our site. This makes our website work better and you can enjoy a better user experience."
            agreeButtonText="Agree"
            disagreeButtonText="Disagree"
            onSubmit={setIsCookiesAllowed}
        />
    );
};
