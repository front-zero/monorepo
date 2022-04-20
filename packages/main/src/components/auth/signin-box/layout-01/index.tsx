import { Input, Button, Anchor, Logo } from "@ht/components";

const SigninBox = () => {
    return (
        <div className="signin-box w-full max-w-[400px] bg-white border border-ghost p-5 sm:p-10">
            <Logo className="mb-10 lg:mr-0" />
            <h2 className="font-light">Welcome back!</h2>
            <h3 className="font-light text-body mb-[50px]">
                Sign in to continue.
            </h3>
            <form action="#">
                <div className="form-group mb-4">
                    <Input
                        type="email"
                        id="signin-email"
                        name="signin-email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group mb-[50px]">
                    <Input
                        type="password"
                        id="signin-password"
                        name="signin-password"
                        placeholder="Enter your password"
                    />
                </div>
                <Button
                    type="submit"
                    fullwidth
                    className="text-sm uppercase tracking-wider border-0 min-h-[40px] mb-10 bg-gradient-to-r from-primary to-purple bg-repeat-x"
                >
                    Sign In
                </Button>
            </form>

            <p className="mb-0">
                Don&apos;t have an account?{" "}
                <Anchor path="/signup">Sign Up</Anchor>
            </p>
        </div>
    );
};

export default SigninBox;
