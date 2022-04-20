import { FC } from "react";
import { mergeTailwindClassesAlt } from "@ht/shared/methods";

interface IProps {
    className?: string;
}

const CardFooter: FC<IProps> = ({ className = "", children }) => {
    return (
        <div
            className={mergeTailwindClassesAlt(
                "card-footer relative px-5 py-3 bg-black/5 border-t border-t-ghost",
                className
            )}
        >
            {children}
        </div>
    );
};

export default CardFooter;
