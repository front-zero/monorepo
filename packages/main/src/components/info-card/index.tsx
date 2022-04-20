import { FC } from "react";
import { Card, CardBody, Button } from "@ht/components";
import clsx from "clsx";
import { IInfo } from "@ht/shared/types";
import { Omit } from "react-tabs";

interface IProps extends Omit<IInfo, "id"> {
    className?: string;
}

const InfoCard: FC<IProps> = ({
    SVGIcon,
    title,
    description,
    button,
    className,
}) => (
    <Card className={clsx("card-info", className)}>
        <CardBody className="p-10 text-center">
            <img
                src={SVGIcon}
                alt="icon"
                className="w-[6.25rem] mb-[1.875rem] inline-block"
                width={100}
                height={100}
            />
            <h5 className="mb-5">{title}</h5>
            <p>{description}</p>
            <Button path={button.path} shape="square" fullwidth>
                {button.text}
            </Button>
        </CardBody>
    </Card>
);

export default InfoCard;
