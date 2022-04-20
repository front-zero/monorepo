import { FC } from "react";
import clsx from "clsx";
import { Card, Media, MediaBody } from "@ht/components";

interface IProps {
    icon: string;
    number: string;
    title: string;
    iconColor?: string;
    className?: string;
}

const StatusCard: FC<IProps> = ({
    icon,
    number,
    title,
    iconColor,
    className,
}) => {
    return (
        <Card className={clsx("card-status p-5", className)}>
            <Media>
                <i
                    className={clsx(
                        "icon text-purple text-[4rem] leading-none",
                        icon,
                        iconColor ? iconColor : "text-success"
                    )}
                />
                <MediaBody className="ml-3.8">
                    <h1 className="mb-0 text-lato font-bold">{number}</h1>
                    <p className="mb-0">{title}</p>
                </MediaBody>
            </Media>
        </Card>
    );
};

export default StatusCard;
