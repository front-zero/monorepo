import { FC } from "react";
import { Card, Button } from "@ht/components";
import clsx from "clsx";

interface IProps {
    className?: string;
    icon: string;
    title: string;
    description: string;
    button: {
        content: string;
        path: string;
    };
}

const InfoCard: FC<IProps> = ({
    className,
    icon,
    title,
    description,
    button,
}) => (
    <Card className={clsx("card-knoledge p-[25px] text-center", className)}>
        <div className="text-success border border-success w-[100px] h-[100px] mx-auto rounded-full mb-[25px] flex justify-center items-center text-[40px]">
            <i className={icon} />
        </div>
        <h4 className="mb-[25px]">{title}</h4>
        <p className="mb-[25px]">{description}</p>
        <Button path={button.path} color="success" fullwidth>
            {button.content}
        </Button>
    </Card>
);

export default InfoCard;
