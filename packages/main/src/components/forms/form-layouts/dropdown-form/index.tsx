import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    Input,
    Button,
    Anchor,
} from "@ht/components";

const CardForm = () => {
    return (
        <Dropdown direction="down">
            <DropdownToggle
                variant="outlined"
                color="light"
                hover={false}
                className="focus:text-heading active:text-heading"
            >
                Sign In
            </DropdownToggle>
            <DropdownMenu className="rounded-none maxSm:p-5 sm:p-10 sm:w-[350px]">
                <h6 className="uppercase font-bold">Sign In</h6>
                <p className="text-secondary mb-[30px]">
                    Signin using your account credentials.
                </p>
                <form>
                    <Input
                        name="dropdown-email"
                        id="dropdown-email"
                        placeholder="Enter email address"
                        className="mb-4"
                    />
                    <Input
                        type="password"
                        name="dropdown-password"
                        id="dropdown-password"
                        placeholder="Enter password"
                        className="mb-4"
                    />
                    <Anchor path="/signup" className="block text-xs mb-4">
                        Forgot password?
                    </Anchor>
                    <Button fullwidth className="mb-[30px]">
                        Sign In
                    </Button>
                    <p className="text-[11px] uppercase tracking-wider">
                        Or Sign In With
                    </p>
                    <Button iconButton>
                        <i className="fa fa-facebook" />
                    </Button>
                    <Button iconButton color="info" className="ml-2">
                        <i className="fa fa-twitter" />
                    </Button>
                    <Button iconButton color="danger" className="ml-2">
                        <i className="fa fa-google" />
                    </Button>
                </form>
            </DropdownMenu>
        </Dropdown>
    );
};

export default CardForm;
