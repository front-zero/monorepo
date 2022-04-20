import { FC } from "react";
import { Input } from "@ht/components";
import clsx from "clsx";

interface IProps {
    className?: string;
}

const BorderedRightLabelAlginForm: FC<IProps> = ({ className }) => {
    return (
        <form className={clsx("right-label-align-form", className)}>
            <div className="grid grid-cols-12">
                <div className="col-span-5 sm:col-span-4">
                    <label
                        htmlFor="borderd-right-label-fname"
                        className="mb-0 text-right block bg-gray-200 border border-ghost border-r-0 text-xs uppercase tracking-wide font-medium py-3.8 px-4"
                    >
                        Firstname:
                    </label>
                </div>
                <div className="col-span-7 sm:col-span-8">
                    <Input
                        className="h-full"
                        name="borderd-right-label-fname"
                        id="borderd-right-label-fname"
                        placeholder="Enter firstname"
                    />
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-5 sm:col-span-4">
                    <label
                        htmlFor="borderd-right-label-lname"
                        className="mb-0 text-right block bg-gray-200 border border-ghost border-t-0 border-r-0 text-xs uppercase tracking-wide font-medium py-3.8 px-4"
                    >
                        Lastname:
                    </label>
                </div>
                <div className="col-span-7 sm:col-span-8">
                    <Input
                        className="h-full border-t-0"
                        name="borderd-right-label-lname"
                        id="borderd-right-label-lname"
                        placeholder="Enter lastname"
                    />
                </div>
            </div>
        </form>
    );
};

export default BorderedRightLabelAlginForm;
