import ErrorBox from "../components/error-box";
import SEO from "../components/seo";

const ErrorNotFound = () => {
    return (
        <>
            <SEO />
            <div className="page-error-wrapper min-h-screen grid place-content-center p-[30px]">
                <ErrorBox
                    title="404"
                    subtitle="Oopps. The page you were looking for doesn't exist."
                    description="You may have mistyped the address or the page may have moved."
                />
            </div>
        </>
    );
};

export default ErrorNotFound;
