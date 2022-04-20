import { FC } from "react";
import clsx from "clsx";
import Anchor from "../../ui/anchor";

interface IProps {
    className?: string;
}

const Logo: FC<IProps> = ({ className }) => {
    return (
        <h1
            className={clsx(
                "logo mb-0 tracking-tightest font-bold text-[2rem] lg:text-[2.25rem] lg:mr-[3.75rem]",
                className
            )}
        >
            <Anchor path="/" className="text-primary">
                stor<span>.</span>
            </Anchor>
        </h1>
    );
};

export default Logo;
