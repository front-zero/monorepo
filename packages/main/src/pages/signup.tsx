import SignupBox from "../components/auth/signup-box/layout-01";
import SEO from "../components/seo";

const Signup = () => {
    return (
        <>
            <SEO />
            <div className="signup-wrapper p-2.5 min-h-screen flex justify-center items-center sm:p-[30px]">
                <SignupBox />
            </div>
        </>
    );
};

export default Signup;
