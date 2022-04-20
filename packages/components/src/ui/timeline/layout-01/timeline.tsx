import { FC } from "react";
import clsx from "clsx";

interface IProps {
    className?: string;
}

const Timeline: FC<IProps> = ({ className, children }) => {
    return (
        <div className={clsx("timeline timeline-01", className)}>
            {children}
        </div>
    );
};

Timeline.displayName = "Timeline";

export default Timeline;
