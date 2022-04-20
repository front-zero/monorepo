import { FC } from "react";
import { Card, CardTitle, Progress } from "@ht/components";
import clsx from "clsx";

interface IProps {
    title: string;
    todaySale: string;
    weekSale: string;
    monthSale: string;
    growthRate: number;
    className?: string;
}

const SalesCard: FC<IProps> = ({
    title,
    todaySale,
    weekSale,
    monthSale,
    growthRate,
    className,
}) => {
    const beforeClass =
        "px-3.8 relative before:absolute before:content-[''] before:top-0 before:left-0 before:bottom-0 before:border-l before:border-ghost";
    const color =
        growthRate >= 70
            ? "success"
            : growthRate < 70 && growthRate >= 50
            ? "primary"
            : "danger";
    return (
        <Card className={clsx("sales-card p-5", className)}>
            <CardTitle
                className={clsx(
                    color === "primary" && "text-primary",
                    color === "success" && "text-success",
                    color === "danger" && "text-danger"
                )}
            >
                {title}
            </CardTitle>
            <div className="flex justify-between mb-5">
                <div
                    className={clsx(
                        "flex-auto first:before:hidden first:pl-0",
                        beforeClass
                    )}
                >
                    <p className="text-xs mb-3">Today</p>
                    <p className="font-lato text-heading font-bold text-[1rem] mb-[0.625rem]">
                        {todaySale}
                    </p>
                </div>
                <div className={clsx("flex-auto ", beforeClass)}>
                    <p className="text-xs mb-3">This Week</p>
                    <p className="font-lato text-heading font-bold text-[1rem] mb-[0.625rem]">
                        {weekSale}
                    </p>
                </div>
                <div className={clsx("flex-auto ", beforeClass)}>
                    <p className="text-xs mb-3">This Month</p>
                    <p className="font-lato text-heading font-bold text-[1rem] mb-[0.625rem]">
                        {monthSale}
                    </p>
                </div>
            </div>
            <Progress
                now={growthRate}
                color={color}
                isLabel
                className="mb-3 lg:mb-[5px]"
            />
            <p className="text-xs mb-0">
                Maecenas tempus, tellus eget conditum rhon.
            </p>
        </Card>
    );
};

export default SalesCard;
