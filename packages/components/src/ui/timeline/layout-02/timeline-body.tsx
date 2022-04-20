import { FC } from "react";
import clsx from "clsx";

export interface IBodyProps {
    className?: string;
    isDay?: boolean;
}

const TimelineBody: FC<IBodyProps> = ({ className, children, isDay }) => {
    const beforeClasses =
        "before:absolute before:content-[''] before:-left-2 before:w-[13px] before:h-[13px] before:border-[3px] before:border-primary before:rounded-full before:z-20";
    const afterClasses =
        "after:absolute after:content-[''] after:top-0 after:-left-[2px] after:bottom-0 after:w-px after:bg-ghost after:z-10";
    const dayBeforeClasses = isDay && "before:bg-primary before:top-[2px]";
    return (
        <div
            className={clsx(
                "timeline-body relative pl-3.8 pb-[30px] md:pl-[25px]",
                className,
                beforeClasses,
                afterClasses,
                dayBeforeClasses,
                !isDay && "before:bg-white before:top-[5px]"
            )}
        >
            {children}
        </div>
    );
};

TimelineBody.displayName = "TimelineBody";

export default TimelineBody;
