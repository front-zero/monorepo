import { FC } from "react";
import clsx from "clsx";
import {
    Card,
    CardTitle,
    Input,
    Textarea,
    Checkbox,
    Button,
    Anchor,
} from "@ht/components";

interface IProps {
    title: string;
    className?: string;
}

const ShippingCard: FC<IProps> = ({ title, className }) => {
    return (
        <Card className={clsx("people-list-card p-[30px]", className)}>
            <CardTitle>{title}</CardTitle>
            <p className="mb-10">
                Returning customer? <Anchor path="/login">Login</Anchor>
            </p>
            <form>
                <div className="grid md:grid-cols-2 gap-x-5 gap-y-4 mb-4">
                    <Input
                        name="firstname"
                        id="firstname"
                        placeholder="First Name"
                    />
                    <Input
                        name="lastname"
                        id="lastname"
                        placeholder="Last Name"
                    />
                </div>
                <div className="mb-4">
                    <Textarea
                        name="address"
                        id="address"
                        rows={3}
                        placeholder="Enter address (Apartment name, Suite no. Street name)"
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-x-5 gap-y-4 mb-4">
                    <Input name="town" id="town" placeholder="Town/City" />
                    <Input
                        name="state"
                        id="state"
                        placeholder="State/Province"
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-x-5 gap-y-4 mb-4">
                    <Input name="zip" id="zip" placeholder="Enter zip code" />
                    <Input
                        name="country"
                        id="country"
                        placeholder="Enter Country"
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-x-5 gap-y-4 mb-4">
                    <Input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Phone number"
                    />
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email address"
                    />
                </div>
                <div className="mb-4 mt-[25px]">
                    <Checkbox
                        name="terms-codition"
                        id="terms-codition"
                        label="I have read and accept the terms of use on this website."
                        defaultChecked
                    />
                </div>
                <div className="mt-[30px]">
                    <Button type="submit" className="px-5">
                        Pay Now
                    </Button>
                    <Button
                        type="reset"
                        color="secondary"
                        className="ml-2 px-5"
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default ShippingCard;
