import { FC } from "react";
import clsx from "clsx";

interface IProps {
    className?: string;
}

const Timeline: FC<IProps> = ({ className, children }) => {
    return <div className={clsx("timeline", className)}>{children}</div>;
};

Timeline.displayName = "Timeline";

export default Timeline;
