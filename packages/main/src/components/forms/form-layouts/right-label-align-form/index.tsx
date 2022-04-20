import { FC } from "react";
import { Input, Textarea, Button } from "@ht/components";
import clsx from "clsx";

interface IProps {
    className?: string;
}

const RightLabelAlginForm: FC<IProps> = ({ className }) => {
    return (
        <form className={clsx("right-label-align-form", className)}>
            <div className="grid sm:grid-cols-12 sm:gap-[30px]">
                <div className="sm:col-span-4 sm:text-right">
                    <label htmlFor="right-label-fname">
                        <span className="text-danger">*</span> Firstname:
                    </label>
                </div>
                <div className="sm:col-span-8">
                    <Input
                        name="right-label-fname"
                        id="right-label-fname"
                        placeholder="Enter firstname"
                    />
                </div>
            </div>
            <div className="grid sm:grid-cols-12 sm:gap-[30px] mt-5">
                <div className="sm:col-span-4 sm:text-right">
                    <label htmlFor="right-label-lname">
                        <span className="text-danger">*</span> Lastname:
                    </label>
                </div>
                <div className="sm:col-span-8">
                    <Input
                        name="right-label-lname"
                        id="right-label-lname"
                        placeholder="Enter firstname"
                    />
                </div>
            </div>
            <div className="grid sm:grid-cols-12 sm:gap-[30px] mt-5">
                <div className="sm:col-span-4 sm:text-right">
                    <label htmlFor="right-label-email">
                        <span className="text-danger">*</span> Email:
                    </label>
                </div>
                <div className="sm:col-span-8">
                    <Input
                        type="email"
                        name="right-label-email"
                        id="right-label-email"
                        placeholder="Enter email address"
                    />
                </div>
            </div>
            <div className="grid sm:grid-cols-12 sm:gap-[30px] mt-5 mb-[30px]">
                <div className="sm:col-span-4 sm:text-right">
                    <label htmlFor="right-label-address">
                        <span className="text-danger">*</span> Address:
                    </label>
                </div>
                <div className="sm:col-span-8">
                    <Textarea
                        name="right-label-address"
                        id="right-label-address"
                        placeholder="Enter your address"
                    />
                </div>
            </div>
            <div className="grid sm:grid-cols-12 sm:gap-[30px]">
                <div className="sm:col-[5/-1]">
                    <Button type="submit">Submit Form</Button>
                    <Button type="reset" className="ml-1" color="secondary">
                        Cancel
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default RightLabelAlginForm;
