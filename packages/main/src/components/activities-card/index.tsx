import { FC } from "react";
import clsx from "clsx";
import {
    Card,
    CardTitle,
    Timeline01,
    Timeline01Item,
    Timeline01Media,
    Timeline01Body,
} from "@ht/components";

interface IProps {
    className?: string;
    title: string;
    lastActivity: string;
    activities: Array<{
        id: string | number;
        icon: string;
        title: string;
        description: string;
        time: string;
        color: string;
    }>;
}

const ActivitiesCard: FC<IProps> = ({
    className,
    title,
    lastActivity,
    activities,
}) => {
    return (
        <Card className={clsx("card-activities p-[25px]", className)}>
            <CardTitle>{title}</CardTitle>
            <p>Last activity was {lastActivity}</p>
            <Timeline01>
                {activities.map((activity) => (
                    <Timeline01Item
                        key={activity.id}
                        className="pt-5 first:pt-0"
                    >
                        <Timeline01Media className={activity.color}>
                            <i className={activity.icon} />
                        </Timeline01Media>
                        <Timeline01Body>
                            <h6>{activity.title}</h6>
                            <p className="text-sm mb-[5px] leading-[1.16]">
                                {activity.description}
                            </p>
                            <span className="block text-xs">
                                {activity.time}
                            </span>
                        </Timeline01Body>
                    </Timeline01Item>
                ))}
            </Timeline01>
        </Card>
    );
};

export default ActivitiesCard;
