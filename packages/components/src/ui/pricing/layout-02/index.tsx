import { FC } from "react";
import clsx from "clsx";
import Button from "../../button/button";

interface IProps {
    title: string;
    price: string;
    period: string;
    features: string[];
    path: string;
    className?: string;
}

const Pricing02: FC<IProps> = ({
    title,
    price,
    period,
    features,
    path,
    className,
}) => {
    return (
        <div
            className={clsx(
                "pricing text-center p-[30px] bg-white border border-ghost",
                className
            )}
        >
            <h6 className="font-bold uppercase tracking-wider text-base mb-[25px]">
                {title}
            </h6>
            <h2 className="text-[56px] font-lato font-normal text-primary mb-0">
                {price}
            </h2>
            <p className="mb-[25px]">per {period}</p>

            <ul className="mx-5 mb-[25px]">
                {features.map((feat) => (
                    <li
                        className="py-2.5 text-center block border-t border-t-geyser first:border-0"
                        key={feat}
                    >
                        {feat}
                    </li>
                ))}
            </ul>
            <Button
                path={path}
                fullwidth
                className="uppercase text-sm font-medium tracking-wider"
            >
                Start Free Trial
            </Button>
        </div>
    );
};

export default Pricing02;
