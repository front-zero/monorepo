import { FC } from "react";
import clsx from "clsx";

export interface IMediaProps {
    className?: string;
}

const TimelineMedia: FC<IMediaProps> = ({ className, children }) => {
    return (
        <div
            className={clsx(
                "timeline-media w-[50px] h-[50px] flex items-center justify-center text-2xl text-white rounded-full z-50",
                className
            )}
        >
            {children}
        </div>
    );
};

export default TimelineMedia;
