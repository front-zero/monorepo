import { FC } from "react";
import clsx from "clsx";

interface IProps {
    className?: string;
    htmlFor: string;
}

const Label: FC<IProps> = ({ className, htmlFor, children }) => {
    return (
        <label
            className={clsx(
                "text-[11px] uppercase tracking-tighter text-body mb-2",
                className
            )}
            htmlFor={htmlFor}
        >
            {children}
        </label>
    );
};

export default Label;
