import { FC } from "react";
import { Input } from "@ht/components";
import clsx from "clsx";

interface IProps {
    className?: string;
}

const BorderedLeftLabelAlginForm: FC<IProps> = ({ className }) => {
    return (
        <form className={clsx("left-label-align-form", className)}>
            <div className="grid grid-cols-12">
                <div className="col-span-5 sm:col-span-4">
                    <label
                        htmlFor="borderd-left-label-fname"
                        className="mb-0 block bg-gray-200 border border-ghost border-r-0 text-xs uppercase tracking-wide font-medium py-3.8 px-4"
                    >
                        Firstname:
                    </label>
                </div>
                <div className="col-span-7 sm:col-span-8">
                    <Input
                        className="h-full"
                        name="borderd-left-label-fname"
                        id="borderd-left-label-fname"
                        placeholder="Enter firstname"
                    />
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-5 sm:col-span-4">
                    <label
                        htmlFor="borderd-left-label-lname"
                        className="mb-0 block bg-gray-200 border border-ghost border-t-0 border-r-0 text-xs uppercase tracking-wide font-medium py-3.8 px-4"
                    >
                        Lastname:
                    </label>
                </div>
                <div className="col-span-7 sm:col-span-8">
                    <Input
                        className="h-full border-t-0"
                        name="borderd-left-label-lname"
                        id="borderd-left-label-lname"
                        placeholder="Enter lastname"
                    />
                </div>
            </div>
        </form>
    );
};

export default BorderedLeftLabelAlginForm;
