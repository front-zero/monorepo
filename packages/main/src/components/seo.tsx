import { FC } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface IProps {
    title?: string;
    titleTemplate?: string;
    description?: string;
}

const SEO: FC<IProps> = ({ title, titleTemplate, description }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    {title} - {titleTemplate}
                </title>
                <meta name="description" content={description} />
            </Helmet>
        </HelmetProvider>
    );
};

SEO.defaultProps = {
    title: "Stor",
    titleTemplate: "React Admin Dashboard Template",
    description: "React Admin Dashboard Template",
};

export default SEO;
