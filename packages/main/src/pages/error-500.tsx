import ErrorBox from "../components/error-box";
import SEO from "../components/seo";

const Error500 = () => {
    return (
        <>
            <SEO />
            <div className="page-error-wrapper min-h-screen grid place-content-center p-[30px]">
                <ErrorBox
                    title="500"
                    subtitle="Oopps. Internal server error."
                    description="The server encountered an internal server error and was
                unable to complete your request."
                />
            </div>
        </>
    );
};

export default Error500;
