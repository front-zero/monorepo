import { FC } from "react";
import clsx from "clsx";

export interface IBodyProps {
    className?: string;
}

const TimelineBody: FC<IBodyProps> = ({ className, children }) => {
    return (
        <div
            className={clsx("timeline-body flex-1 ml-3.8 pt-[10px]", className)}
        >
            {children}
        </div>
    );
};

export default TimelineBody;
