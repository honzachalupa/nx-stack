import { config } from "@nx-stack/utils";
import { Helmet as HelmetCore } from "react-helmet";

export const Helmet: React.FC = () => {
    return (
        <HelmetCore>
            <html lang="cs" />

            <meta name="language" content="cs" />
            <meta name="title" content={config.name} />
            <meta name="image" content="" />
            <meta name="description" content={config.description} />
            <meta name="keywords" content={config.keywords} />
            <meta name="robots" content="index, follow" />
            <meta name="revisit-after" content="7 days" />
            <meta name="author" content={config.developerName} />

            {/* Schema.org for Google */}
            <meta itemProp="name" content={config.name} />
            <meta itemProp="description" content={config.description} />

            {/*  Open Graph / Facebook  */}
            <meta name="og:type" content="website" />
            <meta name="og:url" content={window.location.origin} />
            <meta name="og:title" content={config.name} />
            <meta name="og:site_name" content={config.name} />
            <meta name="og:description" content={config.description} />

            {/*  Twitter  */}
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:url" content={window.location.origin} />
            <meta property="twitter:title" content={config.name} />
            <meta property="twitter:description" content={config.description} />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
            />

            <link
                href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
            />
        </HelmetCore>
    );
};
