import { FC } from "react";
import clsx from "clsx";

export interface ITimeProps {
    className?: string;
}

const TimelineTime: FC<ITimeProps> = ({ className, children }) => {
    return (
        <div
            className={clsx(
                "timeline-time inline-block pr-3.8 pt-px w-[70px] flex-shrink-0 text-right text-xs md:pt-0 md:pr-[25px] md:w-[100px] md:text-base",
                className
            )}
        >
            {children}
        </div>
    );
};

export default TimelineTime;
