import SigninDetails from "../components/site-details";
import SigninBox from "../components/auth/signin-box/layout-02";
import SEO from "../components/seo";

const Signin = () => {
    return (
        <>
            <SEO />
            <div className="signin-wrapper grid md:grid-cols-2">
                <div className="row-start-2 md:row-start-1 md:col-[1/2] md:min-h-screen p-[30px] flex justify-center items-center">
                    <SigninDetails />
                </div>
                <div className="md:col-[2/-1] md:min-h-screen p-[30px] flex justify-center items-center bg-white">
                    <SigninBox />
                </div>
            </div>
        </>
    );
};

export default Signin;
