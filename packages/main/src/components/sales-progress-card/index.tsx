import { FC } from "react";
import clsx from "clsx";
import { Card, CardTitle, Progress } from "@ht/components";
import { getPercentageValue } from "@ht/shared/methods";

interface IProps {
    className?: string;
    title: string;
    sales: number[];
}

const SalesProgressCard: FC<IProps> = ({ className, title, sales }) => {
    const totalSale = sales.reduce((cur, acc) => cur + acc, 0);
    const values: number[] = [];
    sales.forEach((sale) => {
        values.push(getPercentageValue(sale, totalSale));
    });

    return (
        <Card className={clsx("sale-card p-5", className)}>
            <CardTitle className="mb-5">{title}</CardTitle>
            {sales.map((sale, i) => (
                <div key={i}>
                    <p className="mb-[5px]">
                        {new Intl.NumberFormat().format(sale)} sales
                    </p>
                    <Progress
                        now={values[i]}
                        color={
                            values[i] >= 50
                                ? "success"
                                : values[i] >= 40 && values[i] < 50
                                ? "primary"
                                : values[i] >= 20 && values[i] < 40
                                ? "warning"
                                : "danger"
                        }
                        size="xs"
                        className="mb-3.8"
                    />
                </div>
            ))}
        </Card>
    );
};

export default SalesProgressCard;
