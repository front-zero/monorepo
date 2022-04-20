import SigninBox from "../components/auth/signin-box/layout-01";
import SEO from "../components/seo";

const Signin = () => {
    return (
        <>
            <SEO />
            <div className="signin-wrapper p-2.5 min-h-screen flex justify-center items-center sm:p-[30px]">
                <SigninBox />
            </div>
        </>
    );
};

export default Signin;
