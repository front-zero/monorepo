import { Children, FC, ReactChild, ReactText, FunctionComponent } from "react";
import clsx from "clsx";

type IChild = Exclude<ReactChild, ReactText>;

export interface IItemProps {
    className?: string;
    isDay?: boolean;
}

const TimelineItem: FC<IItemProps> = ({ className, isDay, children }) => {
    const RenderChild = Children.map(children, (el) => {
        const child = el as IChild;
        if (child !== null) {
            const childType = child.type as FunctionComponent;
            const name = childType.displayName || childType.name;
            if (name === "TimelineBody") {
                return <child.type {...child.props} isDay={isDay} />;
            }
            return <child.type {...child.props} />;
        }
        return null;
    });
    return (
        <div
            className={clsx(
                "timeline-item flex items-start justify-start",
                isDay && "timeline-day",
                className
            )}
        >
            {RenderChild}
        </div>
    );
};

export default TimelineItem;
