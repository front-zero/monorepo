import { FC } from "react";
import { Card, Progress } from "@ht/components";
import clsx from "clsx";

interface IProps {
    total: number;
    title: string;
    type: "employee" | "product" | "franchise";
    percentages: Array<{
        label: string;
        value: number;
        color?:
            | "primary"
            | "success"
            | "danger"
            | "warning"
            | "info"
            | "indigo"
            | "purple"
            | "orange"
            | "pink";
    }>;
    className?: string;
}

const CardTotal: FC<IProps> = ({
    total,
    title,
    type,
    percentages,
    className,
}) => {
    const icon =
        type === "employee"
            ? "ion-man"
            : type === "product"
            ? "ion-cube"
            : "ion-location";
    return (
        <Card className={clsx("card-total p-[25px] w-full", className)}>
            <h1 className="text-[64px] font-lato font-bold text-center leading-none mb-3.8">
                {total}
            </h1>
            <p className="uppercase text-sm tracking-wider text-center">
                {title}
            </p>
            <div className="text-lg mb-[10px] tx-center opacity-50 flex justify-center flex-wrap">
                <i className={clsx("icon px-[2px] text-gray-600", icon)} />
                <i className={clsx("icon px-[2px] text-gray-600", icon)} />
                <i className={clsx("icon px-[2px] text-gray-600", icon)} />
                <i className={clsx("icon px-[2px] text-gray-600", icon)} />
                <i className={clsx("icon px-[2px] text-gray-600", icon)} />
                <i className={clsx("icon px-[2px] text-gray-600", icon)} />
                <i className={clsx("icon px-[2px] text-ghost", icon)} />
                <i className={clsx("icon px-[2px] text-ghost", icon)} />
                <i className={clsx("icon px-[2px] text-ghost", icon)} />
                <i className={clsx("icon px-[2px] text-ghost", icon)} />
            </div>
            {percentages.map((item, i) => (
                <div key={item.label}>
                    <p className="mb-[5px] capitalize">
                        {item.label} ({item.value}%)
                    </p>
                    <Progress
                        now={item.value}
                        color={item.color}
                        size="xs"
                        className={clsx(
                            i !== percentages.length - 1 && "mb-[10px]"
                        )}
                    />
                </div>
            ))}
        </Card>
    );
};

export default CardTotal;
