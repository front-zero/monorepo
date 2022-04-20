import ErrorBox from "../components/error-box";
import SEO from "../components/seo";

const Error505 = () => {
    return (
        <>
            <SEO />
            <div className="page-error-wrapper min-h-screen grid place-content-center p-[30px]">
                <ErrorBox
                    title="505"
                    subtitle="Oopps. Something is broken."
                    description="We've been automatically alerted of the issue and will
                work to fix it asap."
                />
            </div>
        </>
    );
};

export default Error505;
