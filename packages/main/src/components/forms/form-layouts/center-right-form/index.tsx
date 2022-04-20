import { FC } from "react";
import { Input, Button } from "@ht/components";
import clsx from "clsx";

interface IProps {
    className?: string;
}

const CenterRightForm: FC<IProps> = ({ className }) => {
    return (
        <form className={clsx("center-right-form", className)}>
            <div className="flex items-center justify-center bg-gray-200 border border-ghost px-5 py-5 md:h-20">
                <div className="flex flex-wrap md:flex-nowrap max-w-[185px] md:max-w-none gap-2.5">
                    <Input
                        id="center-name"
                        name="center-name"
                        placeholder="Email address"
                    />
                    <Input
                        type="password"
                        id="center-password"
                        name="center-password"
                        placeholder="Password"
                    />
                    <Button className="!px-5">Sign In</Button>
                </div>
            </div>
            <div className="flex items-center justify-end bg-gray-200 border border-ghost mt-2.5 px-5 py-5 md:h-20">
                <div className="flex flex-wrap md:flex-nowrap max-w-[185px] md:max-w-none gap-2.5">
                    <Input
                        id="right-name"
                        name="right-name"
                        placeholder="Email address"
                    />
                    <Input
                        type="password"
                        id="right-password"
                        name="right-password"
                        placeholder="Password"
                    />
                    <Button className="!px-5">Sign In</Button>
                </div>
            </div>
        </form>
    );
};

export default CenterRightForm;
