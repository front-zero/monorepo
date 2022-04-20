import { FC } from "react";
import { Input, Select, Button } from "@ht/components";
import clsx from "clsx";

interface IProps {
    className?: string;
}

const TopLabelForm: FC<IProps> = ({ className }) => {
    return (
        <form className={clsx("top-label-form", className)}>
            <div className="grid lg:grid-cols-12 gap-x-[30px] gap-y-4 mb-[35px]">
                <div className="lg:col-span-4">
                    <label htmlFor="top-label-fname">
                        Firstname: <span className="text-danger">*</span>
                    </label>
                    <Input
                        name="top-label-fname"
                        id="top-label-fname"
                        placeholder="Enter firstname"
                    />
                </div>
                <div className="lg:col-span-4">
                    <label htmlFor="top-label-lname">
                        Lastname: <span className="text-danger">*</span>
                    </label>
                    <Input
                        name="top-label-lname"
                        id="top-label-lname"
                        placeholder="Enter lastname"
                    />
                </div>
                <div className="lg:col-span-4">
                    <label htmlFor="top-label-email">
                        Email address: <span className="text-danger">*</span>
                    </label>
                    <Input
                        name="top-label-email"
                        id="top-label-email"
                        type="email"
                        placeholder="Enter email address"
                    />
                </div>
                <div className="lg:col-span-8">
                    <label htmlFor="top-label-mail">
                        Mail address: <span className="text-danger">*</span>
                    </label>
                    <Input
                        name="top-label-mail"
                        id="top-label-mail"
                        placeholder="Enter address"
                    />
                </div>
                <div className="lg:col-span-4">
                    <label htmlFor="top-lable-select">
                        Country: <span className="text-danger">*</span>
                    </label>
                    <Select
                        name="top-lable-select"
                        options={[
                            { label: "Firefox", value: "firefox" },
                            { label: "Chrome", value: "chrome" },
                            { label: "Safari", value: "safari" },
                            { label: "Opera", value: "opera" },
                        ]}
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

export default TopLabelForm;
