import { FC } from "react";
import { Input, Textarea, Button } from "@ht/components";
import clsx from "clsx";

interface IProps {
    className?: string;
}

const LeftLabelAlginForm: FC<IProps> = ({ className }) => {
    return (
        <form className={clsx("left-label-align-form", className)}>
            <div className="grid sm:grid-cols-12 sm:gap-[30px]">
                <div className="sm:col-span-4">
                    <label htmlFor="left-label-fname">
                        Firstname: <span className="text-danger">*</span>
                    </label>
                </div>
                <div className="sm:col-span-8">
                    <Input
                        name="left-label-fname"
                        id="left-label-fname"
                        placeholder="Enter firstname"
                    />
                </div>
            </div>
            <div className="grid sm:grid-cols-12 sm:gap-[30px] mt-5">
                <div className="sm:col-span-4">
                    <label htmlFor="left-label-lname">
                        Lastname: <span className="text-danger">*</span>
                    </label>
                </div>
                <div className="sm:col-span-8">
                    <Input
                        name="left-label-lname"
                        id="left-label-lname"
                        placeholder="Enter firstname"
                    />
                </div>
            </div>
            <div className="grid sm:grid-cols-12 sm:gap-[30px] mt-5">
                <div className="sm:col-span-4">
                    <label htmlFor="left-label-email">
                        Email: <span className="text-danger">*</span>
                    </label>
                </div>
                <div className="sm:col-span-8">
                    <Input
                        type="email"
                        name="left-label-email"
                        id="left-label-email"
                        placeholder="Enter email address"
                    />
                </div>
            </div>
            <div className="grid sm:grid-cols-12 sm:gap-[30px] mt-5 mb-[30px]">
                <div className="sm:col-span-4">
                    <label htmlFor="left-label-address">
                        Address: <span className="text-danger">*</span>
                    </label>
                </div>
                <div className="sm:col-span-8">
                    <Textarea
                        name="left-label-address"
                        id="left-label-address"
                        placeholder="Enter your address"
                    />
                </div>
            </div>
            <Button type="submit">Submit Form</Button>
            <Button type="reset" className="ml-1" color="secondary">
                Cancel
            </Button>
        </form>
    );
};

export default LeftLabelAlginForm;
