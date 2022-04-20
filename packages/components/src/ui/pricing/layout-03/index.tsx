import { FC } from "react";
import clsx from "clsx";
import Button from "../../button/button";

interface IProps {
    title: string;
    price: string;
    period: string;
    features: string[];
    path: string;
    isFeatured?: boolean;
    className?: string;
}

const Pricing03: FC<IProps> = ({
    title,
    price,
    period,
    features,
    path,
    isFeatured,
    className,
}) => {
    return (
        <div className={clsx("pricing text-center", className)}>
            <div
                className={clsx(
                    "text-white uppercase font-bold text-sm tracking-whider px-3.8 py-3",
                    isFeatured && "bg-primary",
                    !isFeatured && "bg-heading"
                )}
            >
                {title}
            </div>
            <div
                className={clsx(
                    "py-[50px] px-[30px] bg-gray-200 border-x",
                    isFeatured && "border-x-primary",
                    !isFeatured && "border-x-ghost"
                )}
            >
                <h2 className="font-lato text-shark mb-0 text-h1">{price}</h2>
                <p className="text-xs mb-0">per {period}</p>
            </div>
            <div
                className={clsx(
                    "p-[30px] bg-white border border-t-0",
                    isFeatured && "border-primary",
                    !isFeatured && "border-ghost"
                )}
            >
                <ul className="mx-5 mb-[25px]">
                    {features.map((feat) => (
                        <li
                            key={feat}
                            className="py-2.5 border-t border-t-geyser first:border-0"
                        >
                            {feat}
                        </li>
                    ))}
                </ul>
                <Button
                    path={path}
                    fullwidth
                    className={clsx(
                        "uppercase text-sm font-medium tracking-wider border-0",
                        !isFeatured && "bg-heading"
                    )}
                >
                    Start Free Trial
                </Button>
            </div>
        </div>
    );
};

export default Pricing03;
