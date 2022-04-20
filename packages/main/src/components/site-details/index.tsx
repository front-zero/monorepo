import { Button } from "@ht/components";
import Logo from "@ht/components/src/elements/logo";

const SigninDetails = () => {
    return (
        <div className="signin-details w-full max-w-[400px]">
            <Logo className="mb-10 lg:mr-0" />
            <p>
                We are excited to launch our new company and product Slim. After
                being featured in too many magazines to mention and having
                created an online stir, we know that ThemePixels is going to be
                big. We also hope to win Startup Fictional Business of the Year
                this year.
            </p>
            <p>Browse our site and see for yourself why you need Slim.</p>
            <Button
                variant="outlined"
                color="secondary"
                className="px-[25px] mb-5"
            >
                Learn More
            </Button>
            <p className="text-xs">
                &copy; Copyright {new Date().getFullYear()}. All Rights
                Reserved.
            </p>
        </div>
    );
};

export default SigninDetails;
