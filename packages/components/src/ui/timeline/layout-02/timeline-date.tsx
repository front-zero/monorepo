import { FC } from "react";
import clsx from "clsx";

export interface IDateProps {
    className?: string;
}

const TimelineDate: FC<IDateProps> = ({ className, children }) => {
    return (
        <div
            className={clsx(
                "timeline-date font-bold text-heading text-sm uppercase tracking-wider mb-0",
                className
            )}
        >
            {children}
        </div>
    );
};

export default TimelineDate;
