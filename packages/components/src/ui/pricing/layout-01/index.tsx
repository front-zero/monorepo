import { FC } from "react";
import clsx from "clsx";
import Button from "../../button/button";

interface IProps {
    icon: string;
    title: string;
    description: string;
    price: string;
    path: string;
    className?: string;
}

const Pricing01: FC<IProps> = ({
    icon,
    title,
    description,
    price,
    path,
    className,
}) => {
    return (
        <div className={clsx("pricing sm:p-[30px] text-center", className)}>
            <div className="text-[100px] text-primary">
                <i className={icon} />
            </div>
            <h5 className="font-bold text-primary uppercase tracking-wider mb-[25px]">
                {title}
            </h5>
            <p className="mb-[30px]">{description}</p>
            <h3 className="font-normal mb-[25px] text-lato text-h1">{price}</h3>
            <Button
                path={path}
                fullwidth
                className="uppercase text-sm font-medium"
            >
                Choose Plan
            </Button>
        </div>
    );
};

export default Pricing01;
