import { Card, Anchor, Input, Button } from "@ht/components";

const CardForm = () => {
    return (
        <Card className="w-[350px] p-5 sm:p-10">
            <h5 className="sm:text-2xl font-normal text-shark mb-3.8">
                Sign in to continue
            </h5>
            <p className="mb-[30px]">
                Don&apos;t have an account?{" "}
                <Anchor path="/signup">Create an account</Anchor>, it only takes
                less than a minute.
            </p>
            <form>
                <Input
                    name="card-email"
                    id="card-email"
                    placeholder="Enter email address"
                    className="mb-4"
                />
                <Input
                    type="password"
                    name="card-password"
                    id="card-password"
                    placeholder="Enter password"
                    className="mb-4"
                />
                <Button fullwidth>Sign In</Button>
            </form>
        </Card>
    );
};

export default CardForm;
