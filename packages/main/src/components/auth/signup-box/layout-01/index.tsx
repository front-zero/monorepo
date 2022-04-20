import { Input, Button, Anchor } from "@ht/components";
import Logo from "@ht/components/src/elements/logo";

const SignupBox = () => {
    return (
        <div className="signup-box w-full max-w-[500px] bg-white border border-ghost p-5 sm:p-10">
            <Logo className="mb-10 lg:mr-0" />
            <h2 className="font-light">Get Started!</h2>
            <h3 className="font-light text-body mb-[50px] leading-snug">
                It&apos;s free to signup and only takes a minute.
            </h3>
            <form action="#">
                <div className="grid sm:grid-cols-2 mb-2.5 gap-2.5">
                    <Input
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Firstname"
                    />
                    <Input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Lastname"
                    />
                </div>
                <div className="grid sm:grid-cols-2 mb-2.5 gap-2.5">
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                    />
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <Button
                    type="submit"
                    fullwidth
                    className="text-sm uppercase tracking-wider border-0 min-h-[40px] mb-5 bg-gradient-to-r from-primary to-purple bg-repeat-x"
                >
                    Sign Up
                </Button>
            </form>
            <div className="relative text-center mb-5 before:absolute before:content-[''] before:top-2/4 before:left-0 before:w-full before:h-px before:bg-geyser">
                <span className="bg-white px-2.5 relative z-20">
                    or signup using
                </span>
            </div>

            <Button type="submit" color="facebook" fullwidth>
                Sign Up Using Facebook
            </Button>
            <Button type="submit" fullwidth color="twitter" className="mt-2">
                Sign Up Using Twitter
            </Button>
            <p className="mt-10 mb-0">
                Already have an account? <Anchor path="/signin">Sign In</Anchor>
            </p>
        </div>
    );
};

export default SignupBox;
