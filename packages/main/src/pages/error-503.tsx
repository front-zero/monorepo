import ErrorBox from "../components/error-box";
import SEO from "../components/seo";

const Error503 = () => {
    return (
        <>
            <SEO />
            <div className="page-error-wrapper min-h-screen grid place-content-center p-[30px]">
                <ErrorBox
                    title="503"
                    subtitle="Service Temporarily Unavailable."
                    description="The server is unable to service your request due to
                maintenance downtime or capacity problems."
                />
            </div>
        </>
    );
};

export default Error503;
