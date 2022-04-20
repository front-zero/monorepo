import { FC } from "react";
import clsx from "clsx";

export interface IItemProps {
    className?: string;
}

const TimelineItem: FC<IItemProps> = ({ className, children }) => {
    return (
        <div
            className={clsx(
                "timeline-item flex items-start relative before:absolute before:content-[''] before:top-0 before:left-[25px] before:h-full before:border-l before:border-ghost z-40",
                className
            )}
        >
            {children}
        </div>
    );
};

export default TimelineItem;
