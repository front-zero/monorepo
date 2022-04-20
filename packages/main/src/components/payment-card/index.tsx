import { FC } from "react";
import clsx from "clsx";
import {
    Card,
    CardTitle,
    Radio,
    Input,
    Checkbox,
    Button,
} from "@ht/components";

interface IProps {
    title: string;
    className?: string;
}

const PaymentCard: FC<IProps> = ({ title, className }) => {
    return (
        <Card className={clsx("people-list-card p-[30px]", className)}>
            <CardTitle className="mb-5">{title}</CardTitle>
            <form>
                <div className="flex flex-wrap mb-4">
                    <span className="mr-3">Pay using your:</span>
                    <Radio
                        name="payment-method"
                        id="credit-debit-card"
                        label="Credit/Debit Card"
                        defaultChecked
                    />
                    <Radio name="payment-method" id="paypal" label="Paypal" />
                </div>
                <p className="text-[32px]">
                    <i className="fa fa-cc-visa mr-[5px]" />
                    <i className="fa fa-cc-mastercard mr-[5px]" />
                    <i className="fa fa-cc-discover" />
                </p>
                <div className="mb-4">
                    <label htmlFor="cardno">Card Number</label>
                    <Input name="cardno" id="cardno" />
                </div>
                <div className="mb-4">
                    <label htmlFor="cardname">Name on Card</label>
                    <Input name="cardname" id="cardname" />
                </div>
                <div className="grid md:grid-cols-12 gap-x-5 lg:gap-x-[30px] gap-y-4 mb-4">
                    <div className="md:col-span-7 lg:col-span-5">
                        <label htmlFor="cardmonth">Card Expiry</label>
                        <div className="grid grid-cols-2 gap-x-5 lg:gap-[30px]">
                            <Input
                                name="cardmonth"
                                id="cardmonth"
                                placeholder="MM"
                            />
                            <Input
                                name="cardyear"
                                id="cardyear"
                                placeholder="YY"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-5 lg:col-span-4">
                        <label htmlFor="cardcvv">CVV</label>
                        <Input name="cardcvv" id="cardcvv" />
                    </div>
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

export default PaymentCard;
