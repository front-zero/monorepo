import { FC } from "react";
import clsx from "clsx";

export interface IItemProps {
    className?: string;
}

const TimelineItem: FC<IItemProps> = ({ className, children }) => {
    return (
        <div
            className={clsx(
                "timeline-item relative pl-5 pb-5 border-l border-l-geyser ml-1.5 before:absolute before:content-[''] before:top-0.5 before:-left-[7px] before:h-[13px] before:w-[13px] before:rounded-full before:border-[3px] before:border-primary before:bg-white z-40",
                className
            )}
        >
            {children}
        </div>
    );
};

export default TimelineItem;
