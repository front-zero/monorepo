import { FC } from "react";
import clsx from "clsx";

interface IProps {
    className?: string;
    size?: "sm" | "md";
}

const SectionLabel: FC<IProps> = ({ className, children, size }) => {
    return (
        <h5
            className={clsx(
                "text-gray-600  font-bold uppercase tracking-wider mb-2",
                size === "sm" && "text-[11px]",
                size === "md" && "text-xs",
                className
            )}
        >
            {children}
        </h5>
    );
};

SectionLabel.defaultProps = {
    size: "sm",
};

export default SectionLabel;
