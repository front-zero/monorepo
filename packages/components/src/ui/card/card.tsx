import { FC } from "react";
// import { mergeTailwindClassesAlt } from "@ht/shared/methods";
import clsx from "clsx";

interface IProps {
    className?: string;
}

const Card: FC<IProps> = ({ children, className = "" }) => {
    return (
        <div
            className={clsx(
                "card relative min-h-min break-words bg-white border border-ghost",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Card;
